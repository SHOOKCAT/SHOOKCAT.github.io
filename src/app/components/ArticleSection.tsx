export default function ArticleSection() {
  return (
    <section id="article" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">The Full Story</h2>
        
        <div className="prose prose-lg mx-auto">
          <p className="text-xl text-gray-600 mb-6">
            On a quiet evening in Burbank, California, Conan, an 8-year-old Lab-Pit mix, found himself in an 
            unexpected situation that would change his life forever.
          </p>
          
          <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">The Incident</h3>
          <p className="text-gray-600 mb-6">
            When an intruder entered his family's property, Conan did what any loyal dog would do - he protected 
            his home and family. Unfortunately, this protective action led to severe consequences that now 
            threaten his life.
          </p>
          
          <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">The Legal Battle</h3>
          <p className="text-gray-600 mb-6">
            Despite Conan's previously spotless record and his family's desperate pleas, local authorities have 
            made a decision that could result in Conan's euthanasia. This decision has sparked outrage in the 
            community and beyond.
          </p>
          
          <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">The Community Response</h3>
          <p className="text-gray-600 mb-6">
            The response from the community has been overwhelming. Thousands have already signed petitions, 
            attended rallies, and shown their support on social media. But we need more voices to join our cause.
          </p>
          
          <div className="bg-red-50 border-l-4 border-[#E01A2B] p-6 my-8">
            <p className="text-lg font-semibold text-gray-800">
              "Conan has been a gentle and loving member of our family for eight years. One incident shouldn't 
              define his entire life." - Conan's Family
            </p>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">How You Can Help</h3>
          <p className="text-gray-600 mb-6">
            Time is critical, and we need your support. Whether through signing the petition, making a donation, 
            or spreading awareness, every action counts in our fight to save Conan.
          </p>
          
          <div className="flex justify-center mt-12">
            <a href="#help" className="btn-primary">
              Take Action Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 