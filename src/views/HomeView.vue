<template>
  <main id="main-content" tabindex="-1">
    <HeroSection />
    <ProjectSection />
    <AboutSection />
    <CareerSection />
    <SkillsSection />
    <ContactSection />
  </main>
</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import CareerSection from '@/components/CareerSection.vue'
import ProjectSection from '@/components/ProjectSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
</script>
