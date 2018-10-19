/** script logic
 * change the job description on load, detailing one expression from a selected few
 */


// JOB DESCRIPTION
// detail a series of catchy expression
const job = [
  'who knows what next',
  'something else tomorrow',
  'depends who\'s asking',
  'still figuring it out',
  'by day'
];
// target the <i> element wrapping the job description
const jobDescription = document.querySelector('i');
// every time the page loads, change the text of the <i> element from one of the expressions at random
jobDescription.textContent = job[Math.floor(Math.random() * job.length)];
