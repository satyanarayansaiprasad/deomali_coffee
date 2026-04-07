import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Send } from 'lucide-react';

const SocialFeed = () => {
  const images = [
    { title: 'Social 1', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEolK5EAnvrr_kbQMMlV3aVwE-hCM-MU62Wcb2H1QhkbWmcdqLH61rjMGl29zlwzPjHyM3NXgbIAsjRCm7ugSQ0REyT4RahvnrwqYIXlXbcf8rkPh6Qo7dM75bzmH0AVyGVQHeef0kNO0XbW0akH8eQPFEPCB9yqh6BOesXoDq6QjBA5lfoTOW885YRgsUiFH9lnKFcxwl4TsPBGlf7IAG2hqoAoNwc4pN10gJlFWpNm92QElmKR213mwGUTLaAc09RMsIvc3g0vik' },
    { title: 'Social 2', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFSrU1sATAg859_H_OUx5geuSYB7EiFnE8LhzrQHtCMgto2Yqas4pDs-FtLtK-Um-At3f3XlC5JnnBnRMz6uPU23KbRj_MM9cf1esrLC9allVGFGAATVElC9j_VzA5J7Xl0EJatBr7nPSBCLDb9eXRLNQFuPUgz0aloHWStZ3v1IXX61jhlnl92ykBxSfs7kzLBIXfnKgJ3Dr7_GT1zTIoCTa3zEYJS4W5TOxm4MOSwOeIfmz4RLP3kQH5bPty7unnqC6ccZFT71X0' },
    { title: 'Social 3', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDh5konNMSvGYJSon22fFIzy9aP5GVghzlCQaw1oMgCUa9EF2WtbKsOJ2LP7-UOVnDQcqtgFnyorKmPB-ii9BDUGcBvOXvXsRychHEO9o7aDVNm60EGEusAIZTm7bvd_Txwz9uNAp74CxW2BT693u2VG5_Y-od1IJV96d4TFduSj0jjETNNEWI1pGsT7BXSuFyaWDyPKu31tLb-gww5fe31URtmmTL818dlfAM9Mv78Sm8gaQGu0IUAZfK2lnkh8qQ6CozckOokczLi' },
    { title: 'Social 4', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnFUlq1QwnyiRZbfqy_KUdKvrWRBtW_jNgKsEg7gtld8okQfiCyaXR26JfXJDqcO2-E4p57pDohqAban9If-_Tf3ZxIfVcHJnsVKmo2caNYWI9AkLT4L8ikc4fXjstUaz0LvHInMJDc2FAxaQyiY3I36u8CWGqfoNlf50jSlStEY3w1E_sLTPA5NaBPhUcbUMR02fNVTF76Z9ZbmYYD7kHjlM7w0DYuY_o9zW_tjeTZPfSOyUgpPqZVAvO3S0W8cVCOns6RN4K_Kwe' }
  ];

  return (
    <section className="py-24 md:py-48 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-32 text-center space-y-8">
        <span className="text-secondary font-headline font-black tracking-widest uppercase text-xs">Community</span>
        <h2 className="font-headline text-6xl md:text-8xl font-black tracking-tighter text-primary">Follow the Brew <br/> <span className="text-secondary-container">@deomalicoffee</span></h2>
        <p className="text-secondary/60 max-w-2xl mx-auto font-body text-xl">Tag us in your morning ritual for a chance to be featured in our monthly digital gallery.</p>
      </div>

      <div className="flex gap-4 md:gap-8 px-4 md:px-8 max-w-[1920px] mx-auto pb-48">
        {images.map((img, idx) => (
          <motion.div 
            key={idx}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: idx % 2 !== 0 ? 100 : 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: idx * 0.2 }}
            className="flex-1 aspect-[3/4] relative group rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              alt={img.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
              src={img.src}
            />
            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
               <Instagram size={48} className="text-surface" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Newsletter */}
      <div className="max-w-5xl mx-auto px-6 text-center space-y-16 pt-32 pb-16">
        <div className="space-y-6">
          <h2 className="font-headline text-5xl md:text-7xl font-black text-primary tracking-tighter uppercase pb-12 border-b border-primary/5">Join the <br/> Peak Society</h2>
          <p className="text-secondary/60 text-xl font-body max-w-xl mx-auto">Subscribers get first access to limited-edition mountain roasts and secret brewing guides.</p>
        </div>
        
        <form className="flex flex-col md:flex-row gap-6 max-w-3xl mx-auto p-4 bg-surface rounded-full shadow-xl">
          <input 
            className="flex-1 bg-transparent border-none rounded-full px-12 py-6 focus:ring-0 text-primary font-body text-lg placeholder:text-primary/20" 
            placeholder="ENTER YOUR EMAIL" 
            type="email"
          />
          <button 
            className="bg-primary text-surface font-headline font-black px-16 py-6 rounded-full hover:bg-secondary transition-all duration-500 uppercase tracking-widest text-[12px] flex items-center gap-4 group"
            type="submit"
          >
            JOIN NOW 
            <Send size={16} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default SocialFeed;
