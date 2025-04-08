import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react'

const Developers = () => {
  const developers = [
    {
        role:"قائد",
        name:"مازن ",
    },
    {
        role:"قائد",
        name:"مصعب ",
    },
    {
        role:"مشرف",
        name:"محمد ايوب",
    },
    {
        role:"مطورين",
        name:"أنس",
    },
    {
        role:"مطورين",
        name:"عبد الله",
    },
    {
        role:"مطورين",
        name:"رياض",
    },
  ];
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 sm:p-6">
    <div className="w-full max-w-6xl backdrop-blur-lg bg-white/40 rounded-3xl border border-white/30  p-8 md:p-12 space-y-8">
      
      <h1 className="text-4xl md:text-5xl font-black text-center bg-gradient-to-l from-blue-600 to-cyan-500 bg-clip-text text-transparent">
        الاعضاء
      </h1>
  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {developers.map((item) => (
          <Card 
            key={item.name}
            className="backdrop-blur-sm bg-white/60 border border-white/20 shadow-md hover:shadow-xl hover:border-white/40 transition-all duration-300 group"
          >
            <CardHeader className="space-y-3 text-right">
              <CardTitle className="text-2xl font-bold text-gray-800">
                {item.name}
              </CardTitle>
              <CardDescription className="text-gray-600 font-medium">
                {item.role}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <Button 
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold py-5 rounded-xl
                          shadow-lg hover:shadow-xl hover:scale-[1.02] transition-transform duration-300"
              >
                تواصل
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Developers