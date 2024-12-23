import { useState } from 'react';
import Layout from './../components/Layout';
import PersonaliInfo from '@/components/steps/PersonaliInfo';
import AddressDetail from '@/components/steps/AddressDetail';
import Preferences from '@/components/steps/Preferences';
import Review from '@/components/steps/Review';
import { motion } from 'framer-motion';
const steps = ['Personal Information', 'Address Details', 'Your Choices', 'Review'];

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const StepContent = () => {
    const variants = {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 50 },
    };
  
    switch (currentStep) {
      case 0:
        return (
          <motion.div
            key="step1"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <PersonaliInfo/>
          </motion.div>
        );
      case 1:
        return (
          <motion.div
            key="step2"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <AddressDetail/>
          </motion.div>
        );
        case 2:
          return (
            <motion.div
              key="step3"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              <Preferences/>
            </motion.div>
          );
          case 3:
            return (
              <motion.div
                key="step4"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.5 }}
              >
                <Review/>
              </motion.div>
            );
      default:
        return null;
    }
  };
  
  

  return (
    <Layout>
      <div className="max-w-md mx-auto">
        <div className="mb-4">
          <nav className="flex">
            {steps.map((step, index) => (
              <button
                key={index}
                className={`flex-1 p-2 border-b-2 dark:text-white ${
                  currentStep === index ? 'border-blue-500' : 'border-gray-300'
                }`}
                onClick={() => setCurrentStep(index)}
              >
                {step}
              </button>
            ))}
          </nav>
        </div>
        <div className="p-4 border rounded bg-blue-200 dark:bg-gray-700">
          <StepContent />
        </div>
      </div>
    </Layout>
  );
}
