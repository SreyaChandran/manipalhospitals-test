import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
  
const Faq = () => {
    const faqs = [
        {
          question: "What happens during the first visit?",
          answer: "After gathering general information about the patient's health from our cardiologist will review the patient's medical history, and do a complete physical examination. Then the doctor might order the necessary investigations to determine the health of your heart."
        },
        {
          question: "Some common risk factors for heart disease?",
          answer: "Cholesterol, Hypertension, Obesity, Diabetes, Smoking, Family history of heart disease"
        },
        {
          question: "What are the symptoms of a heart attack?",
          answer: "Mild discomfort or pain in the chest area, it may radiate to the neck, jaw, or arm on the left side of the body and is usually associated with shortness of breath, nausea, and sweating. Diabetics and women may not have chest discomfort but may have only a few of the associated symptoms."
        },
        {
          question: "Is heart disease preventable?",
          answer: "Some illnesses can cause heart disease, but a majority of heart diseases can be prevented by adopting a healthy lifestyle."
        },
        {
          question: "Should you visit a doctor even if you think you are healthy?",
          answer: "Yes, a yearly health check-up that includes a blood pressure check, lipid, and cholesterol test and a discussion with your doctor about other risk factors should not be overlooked."
        },
        {
          question: "Which is the best heart hospital in Bangalore?",
          answer: "Manipal Hospital is a multidisciplinary heart hospital where you will have access to all possible range of solutions from experienced doctors, nurses, and trained medical staff. Our heart specialists, heart surgeons, and nurses work as a team to provide the highest level of patient care. Our cardiologists offer the latest medications and interventional heart disease procedures to provide better heart care results to our patients."
        },
        {
          question: "What are the different conditions that are treated by cardiologists?",
          answer: "The different heart conditions that a cardiologist can treat are: Atherosclerosis, Atrial fibrillation, Arrhythmias, Congenital heart disease, Coronary heart disease, Congestive heart disease, Hypertension, Pericarditis, Ventricular tachycardia, High blood pressure, Heart attacks, Heart failure, Heart transplantation, Chest pain and angina, Pulmonary hypertension, Ventricular tachycardia."
        },
        {
          question: "What are the signs and symptoms of heart disease?",
          answer: "Symptoms of heart diseases may be different for men and women. For example, men are more likely to have chest pain, women are more likely to have other symptoms along with chest pain such as shortness of breath, nausea, and extreme fatigue. Other symptoms include: Chest tightness, Pain, Pain in the neck, jaw, throat, upper abdomen or back, Weakness or coldness in legs or arms."
        },
        {
          question: "What are the symptoms of a heart attack?",
          answer: "The symptoms of a heart attack include: Squeezing or aching sensation in the chest, Shortness of breath, Cold sweat, Fatigue, Lightheadedness or sudden dizziness."
        },
        {
          question: "What is the average life expectancy of heart transplant patient?",
          answer: "The first year after a heart transplant is very critical. People who have a heart transplant are monitored very closely by heart specialists for any infection or rejection. But after one year a life expectancy of a transplant without any complications tends to rise. Statistics says that people live for around 11-14 years after a transplant."
        },
        {
          question: "How can you prevent a heart attack?",
          answer: "There are a few things you can do to prevent a heart attack: Avoid smoke, Control your blood pressure and cholesterol levels, Go for regular medical checkups to check for blood pressure, cholesterol, and diabetes, Exercise regularly, Maintain a healthy weight, Control stress, Avoid alcohol, Eat lean proteins, such as fish and beans, fruits and vegetables, and whole grains."
        },
        {
          question: "Does cardiologist perform heart surgery?",
          answer: "A cardiologist does not perform heart surgery, they just perform some tests and procedures which include: Assessing the patient’s heart and cardiovascular health, Interpreting the results of EKGs and other tests, Referring patients to other specialists, Performing cardiac catheterizations."
        },
        {
          question: "What kind of procedures does an interventional cardiologist do?",
          answer: "The interventional cardiologist uses a catheter (a small flexible tube) to repair damaged or weakened vessels, heart-narrowed arteries, or other affected parts of the heart. They are trained in performing advanced invasive procedures on the patients. The procedures performed by an interventional cardiologist include angioplasty and stenting, atherectomy, embolic protection, percutaneous valve repair, balloon angioplasty, etc."
        },
        {
          question: "Can heart disease be reversed?",
          answer: "For some patients, heart disease can be reversed or managed at the best heart hospital in Bangalore, with the help of lifestyle changes like: Engaging in some sort of physical activity daily, Following a healthy diet, Controlling medical issues like high BP, high cholesterol, and type-1 and type-2 diabetes, Maintaining a healthy weight, Get rid of smoking, Stress management. However, for advanced cases, lifestyle changes alone will not be enough to reverse the disease. In such instances, medical interventions like medications and surgery may be essential to treat heart disease. Consult a famous heart specialist in Bangalore for advanced treatment."
        },
        {
          question: "What are the different types of heart treatment?",
          answer: "There are numerous treatments for heart disease, including: Lifestyle modifications: Adopting a healthy diet, Engaging in regular physical activity, Maintaining a healthy weight, Quitting smoking, Managing stress, Controlling medical conditions such as high blood pressure, high cholesterol, and diabetes can help manage heart disease. Medications: Different medications are used for treating heart disease like Aspirin, Beta-blockers, Calcium channel blockers, ACE inhibitors, etc. Interventional Procedures: Some interventional procedures include Angioplasty, Atherectomy, Coronary artery stenting, etc. Surgical procedures: Some of the surgical procedures for heart issues include heart transplants, coronary artery bypass surgery, heart valve surgery, etc. Consult the best hospital for heart surgery in Bangalore like Manipal Hospitals."
        }
      ];
      return (
        <Accordion type="single" collapsible className="w-full py-[40px]">
            {
                faqs.map((item,index)=>(
                    <AccordionItem value={`item-${index}`} className="bg-white py-2 rounded-sm mb-1" key={index}>
                        <AccordionTrigger className="text-lg text-primary px-2 lg:px-4">{item.question}</AccordionTrigger>
                        <AccordionContent className="border-t-[1px] py-2 border-t-slate-200 px-2 lg:px-4 text-sm font-light text-black">
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))
            }
        </Accordion>
    )
}

export default Faq;