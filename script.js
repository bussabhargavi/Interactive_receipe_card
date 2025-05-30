// script.js

const steps = document.querySelectorAll('#steps-list li');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress');
const completionMessage = document.getElementById('completion-message');

let currentStep = 0;
const totalSteps = steps.length;

function updateStep() {
  // Clear all active classes
  steps.forEach(step => step.classList.remove('active'));

  if (currentStep < totalSteps) {
    steps[currentStep].classList.add('active');

    // Update progress bar percentage
    let progressPercent = ((currentStep) / totalSteps) * 100;
    progressBar.style.width = progressPercent + '%';

    // Update button text if last step
    nextBtn.textContent = currentStep === totalSteps - 1 ? '✅ Finish' : '➡ Next Step';

    // Hide completion message while going through steps
    completionMessage.style.display = 'none';
  } else {
    // All steps done
    steps.forEach(step => step.classList.remove('active'));
    progressBar.style.width = '100%';
    nextBtn.style.display = 'none'; // Hide Next button
    completionMessage.style.display = 'block'; // Show completion message
  }
}

nextBtn.addEventListener('click', () => {
  if (currentStep < totalSteps) {
    currentStep++;
    updateStep();
  }
});

// Initialize on page load
updateStep();
