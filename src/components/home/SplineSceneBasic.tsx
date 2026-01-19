'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { aboutParagraphs } from '@/config/infoConfig'
import { useTheme } from 'next-themes'

export function SplineSceneBasic() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <Card className={`w-full h-[500px] relative overflow-hidden ${
      isDark ? 'bg-black/[0.96]' : 'bg-white/[0.96]'
    }`}>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill={isDark ? "white" : "black"}
      />
      <div className="flex flex-col md:flex-row h-full">
        {/* Left content - 个人简介 */}
        <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
          <h2 className={`text-3xl md:text-4xl font-serif italic mb-6 bg-clip-text text-transparent ${
            isDark 
              ? 'bg-gradient-to-b from-neutral-50 to-neutral-400'
              : 'bg-gradient-to-b from-neutral-900 to-neutral-600'
          }`}>
            关于我
          </h2>
          <div className={`space-y-4 max-w-lg leading-relaxed ${
            isDark ? 'text-neutral-300' : 'text-neutral-700'
          }`}>
            {aboutParagraphs.map((paragraph, index) => (
              <p key={index} className="text-sm md:text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Right content - 3D Scene */}
        <div className="flex-1 relative min-h-[300px] md:min-h-0">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
