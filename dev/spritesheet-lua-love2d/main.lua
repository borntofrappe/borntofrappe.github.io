local TILE_SIZE = 4

local COLUMNS = 120
local ROWS = 80
local WIDTH = TILE_SIZE * COLUMNS
local HEIGHT = TILE_SIZE * ROWS

local CHARACTER_SIZE = 64
local HORIZON_WIDTH = 64
local HORIZON_HEIGHT = 8
local FIELD_WIDTH = 64
local FIELD_HEIGHT = 88

local HORIZON_Y = HEIGHT - FIELD_HEIGHT - HORIZON_HEIGHT

local UPDATE_TIMER = 0.15

local function GenerateQuadsCharacter(atlas)
    local quads = {}

    local frames = math.floor(atlas:getWidth() / CHARACTER_SIZE)

    for i = 1, frames do
        table.insert(
            quads,
            love.graphics.newQuad(CHARACTER_SIZE * (i - 1), 0, CHARACTER_SIZE, CHARACTER_SIZE, atlas:getDimensions())
        )
    end

    return quads
end

local function GenerateQuadHorizon(atlas)
    return love.graphics.newQuad(0, 64, HORIZON_WIDTH, HORIZON_HEIGHT, atlas:getDimensions())
end

local function GenerateQuadField(atlas)
    return love.graphics.newQuad(64, 64, FIELD_WIDTH, FIELD_HEIGHT, atlas:getDimensions())
end

local function GenerateQuadBackground(atlas)
    return love.graphics.newQuad(128, 64, TILE_SIZE, TILE_SIZE, atlas:getDimensions())
end

function love.load()
    love.window.setTitle("spritesheet-lua-love2d")
    love.window.setMode(WIDTH, HEIGHT)
    love.graphics.setBackgroundColor(0.62, 0.7, 0.62)

    gTexture = love.graphics.newImage("spritesheet.png")
    gQuads = {
        ["character"] = GenerateQuadsCharacter(gTexture),
        ["horizon"] = GenerateQuadHorizon(gTexture),
        ["field"] = GenerateQuadField(gTexture),
        ["background"] = GenerateQuadBackground(gTexture)
    }

    gSpriteBatch = love.graphics.newSpriteBatch(gTexture)
    for column = 1, COLUMNS do
        for row = 1, ROWS do
            gSpriteBatch:add(gQuads.background, (column - 1) * TILE_SIZE, (row - 1) * TILE_SIZE)
        end
    end

    local xHorizon = 0
    repeat
        gSpriteBatch:add(gQuads.horizon, xHorizon, HORIZON_Y)
        xHorizon = xHorizon + HORIZON_WIDTH
    until xHorizon > WIDTH

    gCharacter = {
        ["x"] = TILE_SIZE * 2,
        ["y"] = HORIZON_Y - CHARACTER_SIZE,
        ["frame"] = 1
    }

    gField = {
        ["x"] = {},
        ["y"] = HORIZON_Y + HORIZON_HEIGHT,
        ["offsetY"] = 0
    }

    local xField = 0
    repeat
        table.insert(gField.x, xField)
        xField = xField + FIELD_WIDTH
    until xField > WIDTH

    gTimer = 0
end

function love.keypressed(key)
    if key == "escape" then
        love.event.quit()
    end

    if key == "down" then
        gCharacter.frame = 1
    end
end

function love.keyreleased(key)
    if key == "down" then
        gCharacter.frame = 1
    end
end

function love.update(dt)
    if love.keyboard.isDown("down") then
        gTimer = gTimer + dt
        if gTimer >= UPDATE_TIMER then
            gTimer = gTimer % UPDATE_TIMER
            gCharacter.frame = gCharacter.frame == #gQuads.character and 1 or gCharacter.frame + 1

            gField.offsetY = gField.offsetY == FIELD_HEIGHT - TILE_SIZE and 0 or gField.offsetY + TILE_SIZE
        end
    end
end

local function stencilFunction()
    love.graphics.rectangle("fill", 0, gField.y, WIDTH, FIELD_HEIGHT)
end

function love.draw()
    love.graphics.setColor(1, 1, 1)
    love.graphics.draw(gSpriteBatch, 0, 0)

    love.graphics.draw(gTexture, gQuads.character[gCharacter.frame], gCharacter.x, gCharacter.y)

    love.graphics.stencil(stencilFunction, "replace", 1)

    love.graphics.setStencilTest("greater", 0)

    love.graphics.translate(0, -gField.offsetY)
    for i, x in ipairs(gField.x) do
        love.graphics.draw(gTexture, gQuads.field, x, gField.y)
    end
    love.graphics.translate(0, FIELD_HEIGHT)
    for i, x in ipairs(gField.x) do
        love.graphics.draw(gTexture, gQuads.field, x, gField.y)
    end

    love.graphics.setStencilTest()
end
