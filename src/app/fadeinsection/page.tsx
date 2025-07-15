import React from 'react'
import FadeInSection from '@/app/component/FadeInSection'
const index = () => {
  return (
    <section className="bg-black text-white p-10 flex flex-col items-center justify-center">
        <FadeInSection>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Fade-in Section</h2>
            <p className="text-gray-300">
              This content will smoothly fade in from the bottom when it enters the viewport.
            </p>
          </div>
        </FadeInSection>
      </section>
  )
}

export default index