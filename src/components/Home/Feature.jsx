import React from "react";
import aidsPhoto from "../../assets/images/aids-digestion.png";
import thyroidPhoto from "../../assets/images/improves-thyroid-function.png";
import heartPhoto from "../../assets/images/improves-heart-health.png";
import nervePhoto from "../../assets/images/promotes-a-healthy-nervous-system.png";
import "../../assets/css/Feature.css";
import { motion } from "framer-motion";
function Feature() {
  return (
    <><motion.div
    initial={{ opacity: 0 }}
  whileInView={{ opacity: 1, delay: 0.5}}

  className="bg-[#09302B] md:-mt-40 "
  
>    
      <div className=" text-center text-white font-bold mb-8 ">
      <h1 className="text-3xl font-caveat ">Health benifits of Salt</h1>
       
      
      </div>
      
      <div className="p-2 text-white rounded-3xl">
      
        <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 p-2 ">
          <div className="shadow-xl">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full">
              <img src={aidsPhoto} alt="Placeholder" className="w-full" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">
              Aids digestion
            </h3>
            <p className="mt-4 text-sm text-justify p-4">
              Chloride, an integral component of salt, plays a crucial role in
              the digestive process. It serves as a key element in the
              production of Hydrochloric Acid (HCl) within the stomach,
              facilitating efficient digestion.
            </p>
          </div>
          <div className="shadow-xl">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full ">
              <img src={heartPhoto} alt="Placeholder" className="w-full" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">
              Improves heart health
            </h3>
            <p className="mt-4 text-sm text-justify p-4">
              Regular consumption of salt is beneficial for heart health and
              aids in the prevention of various heart diseases. The sodium in
              salt plays a crucial role in regulating blood pressure, which is
              essential for maintaining cardiovascular health. Adequate sodium
              intake helps to balance fluid levels in the body and supports
              proper nerve and muscle function, including the contraction and
              relaxation of the heart muscle.
            </p>
          </div>
          <div className="shadow-xl">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full">
              <img src={thyroidPhoto} alt="Placeholder" className="w-full" />
            </div>
            <h3 className="mt-4 text-lg font-semibold  ">
              Improves thyroid function
            </h3>
            <p className="mt-4 text-sm text-justify p-4 ">
              A well-functioning thyroid gland is essential for maintaining a
              healthy metabolism. The iodine content in salt supports the
              efficient operation of the thyroid gland, ensuring its smooth
              functioning. By providing the necessary iodine, salt plays a
              crucial role in regulating metabolism and promoting overall
              metabolic health.
            </p>
          </div>
          <div className="shadow-xl">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full">
              <img src={nervePhoto} alt="Placeholder" className="w-full" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">
              Facilitates the well-being of the nervous system
            </h3>
            <p className="mt-4 text-sm text-justify p-4">
              The nervous system relies on sodium to regulate cellular water
              balance. Regular salt intake supports the maintenance of a healthy
              nervous system by ensuring proper hydration within our body's
              cells.
            </p>
          </div>
        </div>
      </div>
      </motion.div>
    </>
  );
}

export default Feature;
