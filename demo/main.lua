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

local function GenerateQuadsCharacter(atlas)
    local quads = {}

    local frames = math.floor(atlas:getWidth() / 64)

    for i = 1, frames do 
        table.insert(quads, love.graphics.newQuad(CHARACTER_SIZE * (i - 1), 0, CHARACTER_SIZE, CHARACTER_SIZE, atlas:getDimensions()))
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
    love.window.setTitle('Spritesheet demo')
    love.window.setMode(WIDTH, HEIGHT)
    love.graphics.setBackgroundColor(0.62, 0.7,0.62)

    gTexture = love.graphics.newImage('spritesheet.png')
    gQuads = {
        ["character"] = GenerateQuadsCharacter(gTexture),
        ["horizon"] = GenerateQuadHorizon(gTexture),
        ["field"] = GenerateQuadField(gTexture),
        ["background"] = GenerateQuadBackground(gTexture),
    }
end

function love.keypressed(key)
    if key == 'escape' then 
        love.event.quit()
    end
end

function love.update()

end

function love.draw()
    love.graphics.setColor(1,1,1)
    love.graphics.draw(gTexture, gQuads.character[1], 0, 0)
    love.graphics.draw(gTexture, gQuads.horizon, 0, 64)
    love.graphics.draw(gTexture, gQuads.field, 0, 72)
end

