const QUIZ_STEPS = [
  {
    id: 1,
    title: 'Great, now let’s see if you are eligible for this program. What is your age?',
    answers: [
      { id: '21_58', title: '21-58', nextStep: 2 },
      { id: '18_20', title: '18-20', nextStep: 2 },
      { id: 'under_18', title: 'Under 18', nextStep: null, message: 'Sorry, in this case we cannot help you' }
    ]
  },
  {
    id: 2,
    title: 'Great, you may be eligible! Let’s move to the next question—what’s your current UK status?',
    answers: [
      { id: 'british_passport', title: 'British Passport', nextStep: 3 },
      { id: 'eu_settled_status', title: 'EU Settled Status', nextStep: 3 },
      { id: 'eu_pressetled_status', title: 'EU Pre-settled Status', nextStep: 3 },
      { id: 'ilr', title: 'ILR (Indefinite Leave to Remain)', nextStep: 3 },
      { id: 'refugee_status', title: 'Refugee Status', nextStep: 3 },
      {
        id: 'brp_leave_to_remain',
        title: 'BRP Leave to Remain',
        followUpQuestion: {
          title: 'Is it EU presetled scheme or non eu ?',
          answers: [
            { id: 'yes', title: 'Yes', nextStep: 3 },
            {
              id: 'no',
              title: 'No',
              message: 'Sorry, but in this case, you will only be eligible after you receive your Indefinite Leave to Remain (ILR) status.'
            }
          ]
        }
      },
      {
        id: 'visa',
        title: 'Visa',
        nextStep: null,
        message: 'Sorry, with a visa it is not possible to apply for our program.'
      },
      {
        id: 'asylum_seeker',
        title: 'Asylum seeker',
        nextStep: null,
        message: 'You can only be eligible for this program if you have officially received Refugee Status.'
      }
    ]
  },
  {
    id: 3,
    title: 'Great! You may be eligible. Let’s move to the next step!\n' +
      'Have you studied at a university in the UK before, and have you taken out a Student Loan before?\n',
    answers: [
      { id: 'first_time', title: 'No this is first time', nextStep: 4 },
      { id: 'yes_for_1_year', title: 'Yes for 1 year', nextStep: 4 },
      { id: 'yes_for_2_year', title: 'Yes for 2 year', nextStep: 4 },
      {
        id: 'yes_for_3_year',
        title: 'Yes for 3 year',
        followUpQuestion: {
          title: 'Have you achived any certificates in this 3 years?',
          answers: [
            { id: 'yes', title: 'Yes', message: 'We can try to help, leave your email and we will send a guide' },
            {
              id: 'no',
              title: 'No',
              message: 'In this case we cannot help, so sorry'
            }
          ]
        }
      },
      {
        id: '4_year',
        title: '4 year',
        followUpQuestion: {
          title: 'I asee, and Have you achieved Level 6 bachelors degree?',
          answers: [
            {
              id: 'yes',
              title: 'Yes',
              message: `
              <p>In this case you are eligible to apply for Master’s degree or for Second degree in UK check our website for more information</p>
              <a href="https://topeducation.uk/second-degree">https://topeducation.uk/second-degree</a>
              <br/>
              <a href="https://topeducation.uk/postgraduate">https://topeducation.uk/postgraduate</a>`
            },
            {
              id: 'no',
              title: 'No',
              message: 'In this case we cannot help, so sorry'
            }
          ]
        }
      }
    ]
  },
  {
    id: 4,
    title: 'Congratulations you are eligible for student finance\n' +
      'By the way, I forgot to ask—are you confident in your English skills for a 350-word essay required at the interview, or would you need some support?',
    answers: [
      { id: 'yes', title: 'Yes its ok', nextStep: 5 },
      {
        id: 'no',
        title: 'No',
        message: 'No problem, In this case, please give us a call, and we’ll offer you English courses that will help you prepare for the interview in just two months.'
      }
    ]
  },
  {
    id: 5,
    title: 'Awesome! Would you like more info on our courses and locations, or speak to a manager?',
    answers: [
      { id: 'speak_now', title: 'Speak right now with our manager' },
      {
        id: 'more_info', title: 'Tell me more about courses &#128218',
        extra_info: {
          title: 'No problem! Let’s go over the courses and study modes. Which campus is closest to you?',
          answers: [
            {
              id: 'london', title: 'London',
              description: `
                <span class="subtitle">Sure! At this location, we offer the following study modes:</span>
                
                <ul class="extra-info-ul">
                  <li><b>Option 1:</b></li>
                  <li>9:30 AM - 2:30 PM (two days per week)</li>
                  <li>4:30 PM – 9:00 PM (two days per week)</li>
                  <li>6:00 PM – 9:00 PM (three days per week)</li>
                  <li>Weekends: 9:30 AM – 2:30 PM</li>
                  <li><b>Locations:</b> Stratford, Canary wharf, Bow Road, Greenford</li>
                </ul>
                
                <ul class="extra-info-ul">
                  <li><b>Option 2:</b></li>
                  <li>10:30 AM - 2:30 PM (two days per week)</li>
                  <li>1:30 AM - 3:30 PM (two days per week)</li>
                  <li>6:00 PM - 8:00 PM (two days per week)</li>
                  <li>All lesson are for 2 hours.</li>
                  <li><b>Locations:</b> London Chaucer House, White Hart Yard, SE1 1NX</li>
                </ul>
                
                <ul class="extra-info-ul">
                  <li>Weekdays, 9-30 AM to 4-30 PM, (one day online one day campus)</li>
                  <li>Weekends, 9-30 AM to 4-30 PM, (one day online one day campus)</li>
                   <li><b>Locations:</b>  
                      London Liverpool street station, Chancery lane station Bishops House, Southall. UB1 3HF
                      Masons House, NW9 9NG
                      Holborn – 2-10 Princeton St, London WC1R 4BH
                      Great Titchfield Street, W1W 5BD
                      Wembley. HA9 7EX
                   </li>
                </ul>
              `,
              description_2: `
               <details>
                  <summary class="subtitle">Check our most popular courses at this location: 
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-caret-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" /></svg></summary>
                  
                  <ul>
                    <li>Business and Tourism with foundation 4 years</li>
                    <li>Management in Construction 4 years</li>
                    <li>BSc (Hons) Computing with Foundation Year</li>
                    <li>BSc (Hons) Project Management with Foundation Year</li>
                    <li>BSc (Hons) Applied Business Psychology with Foundation Year</li>
                    <li>BSc (Hons) Health, Wellbeing and Social Care with Foundation Year 4 years</li>
                    <li>BA (Hons) Global Business and Entrepreneurship with Foundation Year 4 years</li>
                    <li>BA (Hons) Global Business (Business Management) with Foundation Year 4 years</li>
                    <li>HNC/HND in Healthcare Practice (Healthcare Management) 2 years</li>
                    <li>HND in Construction (Construction Management) 2 years</li>
                    <li>HND in Business 2 years</li>
                    <li>HND in Digital Technologies (Cyber Security) 2 years</li>
                    <li>Certificate of Higher Education in Business Studies with Foundation (Cert HEF) 2 year</li>
                    <li>Certificate of Higher Education in Business Studies (Cert HE) 1 year course</li>
                    <li>Certificate of Higher Education in Public Health (Cert HE) - 1 year</li>
                  </ul>
              </details>
              `
            },
            {
              id: 'manchester', title: 'Manchester',
              description: `
                <span class="subtitle">Sure! At this location, we offer the following study modes:</span>
                
                <ul class="extra-info-ul">
                  <li><b>Option 1:</b></li>
                  <li>9:30 AM - 2:30 PM (two days per week)</li>
                  <li>4:30 PM – 9:00 PM (two days per week)</li>
                  <li>6:00 PM – 9:00 PM (three days per week)</li>
                  <li>Weekends: 9:30 AM – 2:30 PM</li>
                  <li><b>Locations:</b> Universal Square, Devonshire Street North</li>
                </ul>
                
                 <ul class="extra-info-ul">
                  <li><b>Option 2:</b></li>
                  <li>10:30 AM - 2:30 PM (two days per week)</li>
                  <li>1:30 AM - 3:30 PM (two days per week)</li>
                  <li>All lesson are for 2 hours.</li>
                  <li><b>Locations:</b> City Tower, Manchester</li>
                </ul>
                
                <ul class="extra-info-ul">
                  <li>Weekdays, 9-30 AM to 4-30 PM, (one day online one day campus)</li>
                  <li>Weekends, 9-30 AM to 4-30 PM, (one day online one day campus)</li>
                  <li><b>Locations:</b>  Oxford St, Manchester, M1 6FQ</li>
                </ul>
              `,
              description_2: `
              <details>
                <summary class="subtitle">Check our most popular courses at this location:
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-caret-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" /></svg>
                </summary>
                  
                <ul>
                  <li>Finance and accounting with foundation 4 years</li>
                  <li>Business and Tourism with foundation 4 years</li>
                  <li>Management in Construction 4 years</li>
                  <li>BSc (Hons) Computing with Foundation Year</li>
                  <li>BSc (Hons) Project Management with Foundation Year</li>
                  <li>BSc (Hons) Applied Business Psychology with Foundation Year</li>
                  <li>BSc (Hons) Health, Wellbeing and Social Care with Foundation Year 4 years</li>
                  <li>BA (Hons) Global Business and Entrepreneurship with Foundation Year 4 years</li>
                  <li>BA (Hons) Global Business (Business Management) with Foundation Year 4 years</li>
                  <li>HNC/HND in Healthcare Practice (Healthcare Management) 2 years</li>
                  <li>HND in Construction (Construction Management) 2 years</li>
                  <li>HND in Business 2 years</li>
                  <li>HND in Digital Technologies (Cyber Security) 2 years</li>
                  <li>Certificate of Higher Education in Business Studies with Foundation (Cert HEF) 2 year </li>
                  <li>CourseCertificate of Higher Education in Business Studies (Cert HE) 1 year course</li>
                  <li>Certificate of Higher Education in Public Health (Cert HE) - 1 year</li>
                </ul>
              </details>
              `
            },
            {
              id: 'birmingham', title: 'Birmingham',
              description: `
                <span class="subtitle">Sure! At this location, we offer the following study modes:</span>
                
                <ul class="extra-info-ul">
                  <li><b>Option 1:</b></li>
                  <li>9:30 AM - 2:30 PM (two days per week)</li>
                  <li>4:30 PM – 9:00 PM (two days per week)</li>
                  <li>6:00 PM – 9:00 PM (three days per week)</li>
                  <li>Weekends: 9:30 AM – 2:30 PM</li>
                  <li><b>Locations:</b> Universal Square, Devonshire Street North</li>
                </ul>
                
                <ul class="extra-info-ul">
                  <li><b>Option 2:</b></li>
                  <li>10:30 AM - 2:30 PM (two days per week)</li>
                  <li>1:30 AM - 3:30 PM  (two days per week)</li>
                  <li>All lesson are for 2 hours.</li>
                  <li><b>Locations:</b> Birmingham McLaren Buildings</li>
                </ul>
                
                <ul class="extra-info-ul">
                  <li>Weekdays, 9-30 AM to 4-30 PM, (one day online one day campus)</li>
                  <li>Weekends, 9-30 AM to 4-30 PM, (one day online one day campus)</li>
                  <li><b>Locations:</b> Norfolk House, Smallbrook Queensway</li>
                </ul>
              `,
              description_2: `
              <details>
                <summary class="subtitle">Check our most popular courses at this location:
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-caret-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" /></svg>
                </summary>
                
                <ul>
                  <li>Finance and accounting with foundation 4 years</li>
                  <li>Business and Tourism with foundation 4 years</li>
                  <li>Management in Construction 4 years</li>
                  <li>BSc (Hons) Computing with Foundation Year</li>
                  <li>BSc (Hons) Project Management with Foundation Year</li>
                  <li>BSc (Hons) Applied Business Psychology with Foundation Year</li>
                  <li>BSc (Hons) Health, Wellbeing and Social Care with Foundation Year 4 years</li>
                  <li>BA (Hons) Global Business and Entrepreneurship with Foundation Year 4 years</li>
                  <li>BA (Hons) Global Business (Business Management) with Foundation Year 4 years</li>
                  <li>HNC/HND in Healthcare Practice (Healthcare Management) 2 years</li>
                  <li>HND in Construction (Construction Management) 2 years</li>
                  <li>HND in Business 2 years</li>
                  <li>HND in Digital Technologies (Cyber Security) 2 years</li>
                  <li>Certificate of Higher Education in Business Studies with Foundation (Cert HEF) 2 year </li>
                  <li>CourseCertificate of Higher Education in Business Studies (Cert HE) 1 year course</li>
                  <li>Certificate of Higher Education in Public Health (Cert HE) - 1 year</li>
                </ul>
              </details>
              `
            },
            {
              id: 'leeds', title: 'Leeds',
              description: `
                <span class="subtitle">Sure! At this location, we offer the following study modes:</span>
                
                <ul class="extra-info-ul">
                  <li><b>Option 1:</b></li>
                  <li>9:30 AM - 2:30 PM (two days per week)</li>
                  <li>4:30 PM – 9:00 PM (two days per week)</li>
                  <li>6:00 PM – 9:00 PM (three days per week)</li>
                  <li>Weekends: 9:30 AM – 2:30 PM</li>
                  <li><b>Locations:</b> Leeds, LS1 3DL</li>
                </ul>
              `,
              description_2: `
              <details>
                <summary class="subtitle">Check our most popular courses at this location:
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-caret-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" /></svg>
                </summary>
                
                <ul>
                  <li>Finance and accounting with foundation 4 years</li>
                  <li>Business and Tourism with foundation 4 years</li>
                  <li>Management in Construction 4 years</li>
                  <li>BSc (Hons) Computing with Foundation Year</li>
                  <li>BSc (Hons) Project Management with Foundation Year</li>
                  <li>BSc (Hons) Applied Business Psychology with Foundation Year</li>
                  <li>BSc (Hons) Health, Wellbeing and Social Care with Foundation Year 4 years</li>
                  <li>BA (Hons) Global Business and Entrepreneurship with Foundation Year 4 years</li>
                  <li>BA (Hons) Global Business (Business Management) with Foundation Year 4 years</li>
                  <li>HNC/HND in Healthcare Practice (Healthcare Management) 2 years</li>
                  <li>HND in Construction (Construction Management) 2 years</li>
                  <li>HND in Digital Technologies (Cyber Security) 2 years</li>
                </ul>
              </details>
              `
            }
          ]
        }
      },
      { id: 'book_call', title: 'Book a call Calendly' },
      { id: 'leave_details', title: 'Leave your details' }
    ]
  }
];

const firstStep = document.querySelector('.welcome');

const nextStepBtn = document.querySelector('.next-btn');
const resetQuizBtn = document.querySelector('.reset-button');

const showWelcomeInfoNoBtn = document.querySelector('.btn-secondary');
const showWelcomeInfoYesBtn = document.querySelector('#yes-button');

const stepWrapper = document.querySelector('.step-wrapper');
const linkWrapper = document.querySelector('.links-container');
const formWrapper = document.querySelector('.form-container');


const totalStepElement = document.querySelector('.total-steps');
const currentStepElement = document.querySelector('.current-step');

const totalSteps = QUIZ_STEPS.length;
let currentStep = 1;

stepWrapper.dataset.totalSteps = totalSteps.toString();
stepWrapper.dataset.activeStep = currentStep.toString();
totalStepElement.textContent = totalSteps.toString();
currentStepElement.textContent = currentStep;

nextStepBtn.disabled = true;
nextStepBtn.classList.add('disabled');
resetQuizBtn.disabled = true;
resetQuizBtn.classList.add('disabled_reset_btn');

function handleNextStep(stepId) {
  document.querySelector('.welcome-info').style.display = 'none';
  const quizContainer = document.querySelector('.step-wrapper');

  nextStepBtn.disabled = false;
  nextStepBtn.classList.remove('disabled');

  const stepData = QUIZ_STEPS.find(step => step.id === stepId);
  if (!stepData) return;

  stepWrapper.innerHTML = '';

  const { answers, title } = stepData;

  const quizStepComponent = `
    <div class="quiz-step">
      <h3 class="title">${title}</h3>
      <div class="answer-step-wrapper">
        ${answers.map(({ title, id }) => `
          <label onclick="handleActiveAnswer(this, ${stepId}, '${id}')" class="answer">
            ${title}
          </label>
        `).join('')}
      </div>
    </div>
  `;

  stepWrapper.insertAdjacentHTML('afterbegin', quizStepComponent);

  stepWrapper.dataset.activeStep = stepId.toString();
  currentStepElement.textContent = stepId;
}

function showWelcomeInfo() {
  const welcomeInfo = document.querySelector('.welcome-info');


  nextStepBtn.disabled = false;
  nextStepBtn.classList.remove('disabled');

  firstStep.style.display = 'none';
  welcomeInfo.style.display = 'block';
}

function handleExtraInfo(selectedAnswer, id) {
  document.querySelectorAll('.answer').forEach(answer =>
    answer.classList.remove('answer-active')
  );

  selectedAnswer.classList.add('answer-active');

  document.querySelectorAll('.extra-info').forEach(info =>
    info.style.display = 'none'
  );

  const block = document.getElementById(`info-${id}`);
  if (block) {
    block.style.display = 'flex';
  }
}

function handleActiveAnswer(selectedAnswer, stepId, answerId) {
  const formBlock = document.querySelector('.form-container');
  const linksBlock = document.querySelector('.links-container');

  document.querySelectorAll('.answer').forEach(answer =>
    answer.classList.remove('answer-active')
  );
  selectedAnswer.classList.add('answer-active');

  const currentStepData = QUIZ_STEPS.find(step => step.id === stepId);
  if (!currentStepData) return;

  const selectedOption = currentStepData.answers.find(a => a.id === answerId);
  if (!selectedOption) return;

  const quizContainer = document.querySelector('.step-wrapper');

  if (stepId === 5) {
    nextStepBtn.disabled = true;
    nextStepBtn.classList.add('disabled');

    if (selectedOption.id === 'speak_now') {
      quizContainer.innerHTML = '';

      linksBlock.style.display = 'block';
    } else if (selectedOption.id === 'more_info') {
      const { title, answers } = selectedOption.extra_info;

      return quizContainer.innerHTML = `
      <div class="quiz-step">
        <h3 class="title">${title}</h3>
    
        <div class="answer-step-wrapper">
          ${answers.map(({ id, title }) => `
            <label onclick="handleExtraInfo(this, '${id}')" class="answer">
              ${title}
            </label>
          `).join('')}
       </div>

        <div class="extra-info-wrapper">
          ${answers.map(({ id, description, description_2 }) => `
           <div class="extra-info" id="info-${id}" style="display: none;">
             ${description || ''}<br>
             ${description_2 || ''}
           </div>
         `).join('')}
        </div>
      </div>
      `;
    } else if (selectedOption.id === 'book_call') {
      window.location.href = 'https://calendly.com/topeducation-uk';
    } else if (selectedOption.id === 'leave_details') {
      quizContainer.innerHTML = '';
      formBlock.style.display = 'flex';
    }
    return;
  }

  if (selectedOption.followUpQuestion) {
    quizContainer.innerHTML = `
      <div class="quiz-step">
        <h3 class="title">${selectedOption.followUpQuestion.title}</h3>
        <div class="answer-step-wrapper">
          ${selectedOption.followUpQuestion.answers.map(({ title, id, nextStep, message }) => `
            <label onclick="handleFollowUp(this, ${stepId}, '${id}', ${nextStep}, '${message || ''}')" class="answer">
              ${title}
            </label>
          `).join('')}
        </div>
      </div>
    `;
    return;
  }

  if (!selectedOption.nextStep) {
    nextStepBtn.disabled = true;
    nextStepBtn.classList.add('disabled');

    quizContainer.innerHTML = `
      <div class="quiz-step">
        <h3 class="title">Unfortunately, you cannot proceed</h3>
        <p class="quiz-message-error">${selectedOption.message}</p>
        <button onclick="closeQuiz()" class="btn-primary">Close the quiz</button>
      </div>
    `;
    return;
  }

  currentStep = selectedOption.nextStep;
  handleNextStep(currentStep);
}

function handleFollowUp(selectedAnswer, stepId, answerId, nextStep, message = '') {
  document.querySelectorAll('.answer').forEach(answer =>
    answer.classList.remove('answer-active')
  );
  selectedAnswer.classList.add('answer-active');

  const quizContainer = document.querySelector('.step-wrapper');

  if (!nextStep) {
    nextStepBtn.disabled = true;
    nextStepBtn.classList.add('disabled');

    quizContainer.innerHTML = `
      <div class="quiz-step">
        <h3 class="title">Unfortunately, you cannot proceed</h3>
        <p class="quiz-message-error">${message}</p>
        <button onclick="closeQuiz()" class="btn-primary">Close the quiz</button>
      </div>
    `;
    return;
  }

  currentStep = nextStep;
  handleNextStep(currentStep);
}

function closeQuiz() {
  document.querySelector('.quiz').style.display = 'none';
}

nextStepBtn.addEventListener('click', () => {
  handleNextStep(currentStep);
});

resetQuizBtn.addEventListener('click', () => {
  resetQuizBtn.disabled = true;
  resetQuizBtn.classList.add('disabled_reset_btn');

  stepWrapper.style.display = 'none';
  formWrapper.style.display = 'none';
  linkWrapper.style.display = 'none';

  firstStep.style.display = 'flex';
  currentStep = 0

  handleNextStep(1);
});

showWelcomeInfoNoBtn.addEventListener('click', () => {
  stepWrapper.style.display = 'block';

  resetQuizBtn.disabled = false;
  resetQuizBtn.classList.remove('disabled_reset_btn');

  showWelcomeInfo();
});

showWelcomeInfoYesBtn.addEventListener('click', () => {
  stepWrapper.style.display = 'block';
  firstStep.style.display = 'none';

  resetQuizBtn.disabled = false;
  resetQuizBtn.classList.remove('disabled_reset_btn');

  handleNextStep(currentStep);
});

