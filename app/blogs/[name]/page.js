import React from 'react'
import Image from 'next/image'
import teammanipal1_1_19 from '@/public/images/teammanipal1_1_19.png'
import sharewhatsapp from '@/public/images/sharewhatsapp.webp'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import BlogsCarousel from "@/components/blogsCarousel"
const page = ({params}) => {
    const slug = params.name;
    const heading = "The Benefits of Drinking Papaya Leaf Juice: Uses of Papaya Leaves in Dengue Fever"
    const postedOn = "Jul 19, 2024";
    const imgsrc = "benefits-of-drinking-papaya-leaf-juice-In-dengue-fever.webp";
    const time = 5
    const description = "Papaya leaves, often overshadowed by the fruit they accompany, are treasure troves of health benefits. With a rich history in traditional medicine, these leaves have garnered attention for their potential to aid in the recovery from illnesses such as dengue fever Symptoms. Understanding the goodness of papaya leaves can open doors to natural remedies that enhance our well-being."
    const blogData = [
        {
            title: "Understanding Papaya Leaves",
            description: "Papaya leaves come from the Carica papaya plant, native to Central America and now grown in many tropical regions. Known for their distinct lobed shape, these leaves have been used in traditional medicine for centuries. They hold a significant place in herbal remedies, particularly in Southeast Asia, where they are utilized to treat various ailments."
        },
        {
            title: "Nutritional Content of Papaya Leaves",
            description: "Papaya leaves are packed with essential nutrients. They contain vitamins A, C, E, and several B vitamins. Minerals such as calcium, magnesium, and potassium are also abundant. Additionally, papaya leaves are rich in antioxidants like flavonoids and phenolic compounds. These nutrients collectively contribute to their health-boosting properties."
        },
        {
            title: "Health Benefits of Drinking Papaya Leaf Juice",
            description: "One of the standout benefits of papaya leaf juice is its ability to boost platelet count, making it particularly beneficial for individuals suffering from dengue fever. The juice also supports immune function, helping the body to fight off infections more effectively. Its anti-inflammatory properties aid in reducing inflammation and speeding up recovery from various illnesses."
        },
        {
            title: "Papaya Leaf Extract and Its Uses",
            description: "Papaya leaf extract is a concentrated form of the leaf’s beneficial compounds. It is known for enhancing platelet count and promoting overall health. Traditional medicine has long utilized papaya leaf extract to treat ailments ranging from digestive issues to skin conditions. Modern studies are beginning to confirm these benefits, bringing traditional wisdom into the spotlight."
        },
        {
            title: "Uses of Papaya Leaves in Various Conditions",
            description: "Dengue fever, a mosquito-borne illness, often leads to a significant drop in platelet count, posing severe health risks. Papaya leaves have been shown to help manage these symptoms and support recovery. Scientific studies indicate the papaya leaf benefits from the extract which can increase platelet count, making it a promising natural remedy for dengue fever. Beyond dengue, papaya leaves offer benefits for digestive health by alleviating symptoms like bloating and indigestion. Their antimicrobial properties make them useful for skin conditions, helping to clear up infections and promote healthy skin. Incorporating papaya leaves into your diet can be as simple as adding them to salads or brewing them into teas. Consult our expert Internal Medicine doctor in case you need diagnosis and treatment for dengue fever."
        },
        {
            title: "How to Prepare Papaya Leaf Juice",
            description: "Preparing papaya leaf juice at home is straightforward. Follow these steps: Select fresh papaya leaves and wash them thoroughly. Chop the leaves into small pieces. Blend the chopped leaves with a small amount of water until smooth. Strain the mixture to extract the juice. Consume the juice fresh, preferably on an empty stomach. Alternatively, papaya leaves can be consumed in salads or brewed into tea for a milder flavour."
        },
        {
            title: "Safety and Precautions",
            description: "While papaya leaves offer numerous benefits, they should be consumed with caution. Potential side effects include allergic reactions and gastrointestinal discomfort. It is essential to follow dosage recommendations and consult a healthcare professional before incorporating papaya leaves into your medicinal routine. Papaya leaves are a powerhouse of nutrients and health benefits, particularly in boosting platelet count and supporting recovery from dengue fever. Their uses extend to digestive health, skincare, and beyond. However, it is crucial to approach their use with proper knowledge and professional guidance. Consult our Internal Medicine Hospital in case you need more information on the uses of papaya leaf."
        }
    ]; 
    const faq = [
        {
            question: "Can papaya leaf juice cure dengue fever?",
            answer: "Papaya leaf juice cannot cure dengue fever, but it can help manage symptoms and support recovery by boosting platelet count."
        },
        {
            question: "How often should I drink papaya leaf juice for health benefits?",
            answer: "It is recommended to consult with a healthcare professional for personalized advice, but generally, consuming papaya leaf juice once daily during illness can be beneficial."
        },
        {
            question: "Are there any side effects of drinking papaya leaf juice?",
            answer: "Some people may experience allergic reactions or gastrointestinal discomfort. It's important to start with a small amount and monitor your body’s response."
        },
        {
            question: "Can I use papaya leaves for skin conditions?",
            answer: "Yes, papaya leaves have antimicrobial properties that can help treat skin infections and promote healthy skin."
        },
        {
            question: "How do I store papaya leaf juice?",
            answer: "Fresh papaya leaf juice is best consumed immediately, but it can be stored in the refrigerator for up to 24 hours."
        },
        {
            question: "Can pregnant women consume papaya leaf juice?",
            answer: "Pregnant women should consult their healthcare provider before consuming papaya leaf juice, as it may not be suitable for everyone."
        },
        {
            question: "Are there any other ways to consume papaya leaves besides juice?",
            answer: "Yes, papaya leaves can be added to salads, brewed into tea, or taken as an extract or supplement."
        }
    ];       
    return (
        <>
        <div className="blog w-full max-w-[1660px] bg-slate-50 py-[40px] px-[20px] md:px-[40px] lg:px-[50px] xl:px-[100px] max-h-[100vh] overflow-y-auto flex flex-col-reverse md:flex-row-reverse gap-4 justify-between items-start">
            <div className="h-40 w-full md:w-[30vw] float-right sticky top-0">
                <div className='w-full border-2 h-auto border-[#00b7ac] rounded-lg'>
                    <div className='h-auto rounded-t-md w-full gradient-bg py-4 flex items-center justify-center px-[0px]'>
                        <Image src={teammanipal1_1_19} 
                            alt="Manipal Hospitals" 
                            className='min-w-[100%] h-auto'
                            layout="responsive"
                            placeholder="blur"
                            blurDataURL="../public/images/teammanipal1_1_19.png"
                        />
                    </div>
                    <p className='text-sm font-bold py-2 text-center'>Department of Internal Medicine</p>
                    <Button variant="default" className='mx-auto translate-x-[50%] mt-2 mb-4'>Book Appointment</Button>
                </div>
                <div className='w-full border-2 h-auto border-[#00b7ac] rounded-lg mt-4 py-2 px-6 flex flex-col items-center gap-2'>
                    <p className='text-lg py-2 text-center text-slate-600 font-medium'>Subscribe to our blogs</p>
                    <Input className='border-gray-400' placeholder='Enter Your Email ID'/>
                    <Button variant="default" className='mt-2 mb-4'>Subscribe</Button>
                </div>
            </div>
            <div className='flex-grow h-[900px] w-full'>
                <div className='gradient-bg w-full p-2 text-2xl font-bold text-white'>{heading}</div>
                <div className='flex flex-row items-center justify-between'>
                    <p className='text-sm'>Posted On: <span className='font-bold'>{postedOn}</span></p>
                    <p className='text-sm font-bold flex flex-row items-center gap-1 py-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        <span className='font-bold'>{time} Min Read</span>
                    </p>
                </div>
                <Image
                    src = {`/images/${imgsrc}`} 
                    width={500}
                    height={500}
                    alt="Blog Image"
                    className='w-full py-4'
                />
                <p className='text-sm leading-8 font-medium'>{description}</p>
                <p className='text-lg font-bold pt-8 pb-3'>Synopsis</p>
                <ul className='list-disc px-6 pb-8'>
                    {
                        blogData.map((item, index)=>(
                            <li key={index} className='text-[#00b7ac] font-medium text-[15px] leading-7'>{item.title}</li>
                        ))
                    }
                </ul>
                {
                    blogData.map((item, index)=>(
                        <div key={index}>
                            <p className='text-[24px] font-medium leading-[60px]'>{item.title}</p>
                            <p className='text-sm leading-8 font-medium'>{item.description}</p>
                        </div>
                    ))
                }
                <div className='w-full bg-primary my-8 py-6 px-4 mb-2'>
                    <p className='text-2xl text-white font-bold py-4'>FAQ</p>
                    <Accordion type="single" collapsible className="w-full">
                    {
                        faq.map((item,index)=>(
                            <AccordionItem value={`item-${index}`} className="bg-white py-2 rounded-sm mb-1" key={index}>
                                <AccordionTrigger className="text-md lg:text-lg text-primary px-2 lg:px-4">{item.question}</AccordionTrigger>
                                <AccordionContent className="border-t-[1px] py-2 border-t-slate-200 px-2 lg:px-4 text-xs lg:text-sm font-light text-black">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))
                    }
                    </Accordion>
                </div>
                <p className='text-lg font-bold pt-8'>Share this article on:</p>
                <div className='flex flex-row items-center justify-start gap-2'>
                    <div className='w-12 h-12 rounded-full gradient-bg my-2 flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </div>
                    <div className='w-12 h-12 rounded-full gradient-bg my-2 flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                    </div>
                    <div className='w-12 h-12 rounded-full gradient-bg my-2 flex items-center justify-center'>
                        <Image src={sharewhatsapp} 
                            alt="Manipal Hospitals" 
                            className='min-w-[100%] h-auto'
                            layout="responsive"
                            placeholder="blur"
                            blurDataURL="../public/images/sharewhatsapp.webp"
                        />
                    </div>
                    <div className='w-12 h-12 rounded-full gradient-bg my-2 flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </div>
                </div>
            </div>
        </div>
        <div className="blog w-full max-w-[1660px] bg-slate-50 py-[40px] px-[20px] md:px-[40px] lg:px-[50px] xl:px-[100px] pt-8">
            <p className='text-[#00b7ac] text-4xl leading-14 font-black py-6 px-4'>Similar Blogs</p>
            <BlogsCarousel />
            <p className='text-[#00b7ac] text-4xl leading-14 font-black py-6 px-4'>Recent Posts</p>
            <BlogsCarousel />
        </div>
        </>
    )
}

export default page