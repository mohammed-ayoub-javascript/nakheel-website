import { Button } from '@/components/ui/button'
import React from 'react'

const Aboutus = () => {
  return (
<div className="min-h-screen bg-white flex items-center justify-center p-5">
  <div className="w-full max-w-7xl backdrop-blur-xl bg-white/30 rounded-2xl border border-white/20 transition-all duration-300 hover:shadow-2xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8">
    
    <div className="flex-1 space-y-6 md:space-y-8 text-right">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
        فريق نخل لتطوير تطبيقات الويب
      </h1>
      
      <h3 className="text-xl md:text-2xl text-gray-700 leading-relaxed">
        تطوير تطبيقات ويب آمنة سريعة الأداء، واجهات احترافية
      </h3>

      <div className="mt-6">
        <button className="bg-gradient-to-l from-blue-500 to-cyan-400 text-white px-8 py-3.5 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
          تواصل معنا
        </button>
      </div>
    </div>

    <div className="flex-1">
      <img 
        src="https://www.dngappdeveloper.com/images/about/about-service.png" 
        alt="Web Development" 
        className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
      />
    </div>
  </div>
</div>
  )
}

export default Aboutus