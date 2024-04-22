import React from "react";
import aidsPhoto from "../assets/images/aids-digestion.png";
import thyroidPhoto from "../assets/images/improves-thyroid-function.png";
import heartPhoto from "../assets/images/improves-heart-health.png";
import nervePhoto from "../assets/images/promotes-a-healthy-nervous-system.png";
import "../assets/css/Feature.css";
import { motion } from "framer-motion";
function Feature() {
  return (
    <><motion.div
    initial={{ opacity: 0 }}
  whileInView={{ opacity: 1, delay: 0.5}}
  viewport={{ once: false }}
  
> 
      <div className=" border benefit m-8 rounded-2xl">
        <h1 className="text-white capitalize text-3xl font-bold mb-4">
          Health Benefits Of Salt:
        </h1>
        <p className="text-white">
          From aiding in digestion and improving the function of the thyroid
          gland to boosting heart health, consumption of salt on a regular basis
          can have a range of health benefits.
        </p>
      </div>
      <div className="p-4 m-4 lg:m-8 bg-[#DBE7C9] rounded-3xl">
        <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full">
              <img src={aidsPhoto} alt="Placeholder" className="w-full" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-black">
              Aids digestion
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              Chloride, an integral component of salt, plays a crucial role in
              the digestive process. It serves as a key element in the
              production of Hydrochloric Acid (HCl) within the stomach,
              facilitating efficient digestion.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full">
              <img src={heartPhoto} alt="Placeholder" className="w-full" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-black">
              Improves heart health
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              Regular consumption of salt is beneficial for heart health and
              aids in the prevention of various heart diseases. The sodium in
              salt plays a crucial role in regulating blood pressure, which is
              essential for maintaining cardiovascular health. Adequate sodium
              intake helps to balance fluid levels in the body and supports
              proper nerve and muscle function, including the contraction and
              relaxation of the heart muscle.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full">
              <img src={thyroidPhoto} alt="Placeholder" className="w-full" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-black">
              Improves thyroid function
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              A well-functioning thyroid gland is essential for maintaining a
              healthy metabolism. The iodine content in salt supports the
              efficient operation of the thyroid gland, ensuring its smooth
              functioning. By providing the necessary iodine, salt plays a
              crucial role in regulating metabolism and promoting overall
              metabolic health.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full">
              <img src={nervePhoto} alt="Placeholder" className="w-full" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-black">
              Facilitates the well-being of the nervous system
            </h3>
            <p className="mt-4 text-sm text-gray-600">
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
