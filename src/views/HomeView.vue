<script setup>
import { reactive, ref, } from 'vue'
const isOverlayOpen = ref(false)
const isMenuOpen = ref(false);
const folderName = ref("");
const setDetail = (name) => {
  folderName.value = name;
  const length = folderName.value.split('-')[1]
  if (length && length > 0) {
    toggleOverlay();
  }
}
const thumbnails = reactive([
  {
    imgSrc: 'phuc-37',
    title: 'Phuc and brand identify design',
    subTitle: '22-07-2024 9:41',
    like: 210,
    view: 2005
  },
  {
    imgSrc: 'latte-6',
    title: 'Latte design',
    subTitle: '24-07-2024 9:41',
    like: 120,
    view: 1400
  },
  {
    imgSrc: 'rom-56',
    title: 'Rom and brand identify design',
    subTitle: '11-08-2024 9:41',
    like: 180,
    view: 1890
  },
  {
    imgSrc: 'kuva-28',
    title: 'Kuva logo & brand identity design',
    subTitle: '11-08-2024 9:41',
    like: 215,
    view: 2250
  },

  {
    imgSrc: 'kizo-29',
    title: 'Kizo - Branding',
    subTitle: '09-08-2024 9:41',
    like: 120,
    view: 1900
  },
])
for (let i = 6; i <= 21; i++) {
  thumbnails.push({
    imgSrc: `${i}`,
    title: 'thumb ' + i + ' & brand identity design',
    subTitle: '09-08-2024 9:41',
    like: Math.floor(Math.random() * (400 - 100) + 100),
    view: Math.floor(Math.random() * (2500 - 1900) + 1900)
  })
}
const getDetailImage = () => {
  const length = folderName.value.split('-')[1]
  let arr = []
  for (let i = 1; i <= length; i++) {
    arr.push(`/assets/images/${folderName.value}/${i}.png`)
  }
  return arr
}
const toggleOverlay = () => {
  isOverlayOpen.value = !isOverlayOpen.value;
}
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
}


</script>
<template>
  <header class="relative">
    <!-- Header with Logo and Menu -->
    <div class="flex justify-between items-center pt-4 px-[4%] md:px-[10%]">
      <!-- Logo Section -->
      <div class="flex items-center space-x-2">
        <img src="/assets/images/Avt.png" alt="Brandie Logo" class="h-auto w-[100px]"> <!-- Placeholder for Logo -->
      </div>

      <!-- Hamburger Button (Visible on mobile) -->
      <div class="block lg:hidden">
        <button @click="isMenuOpen = true" class="focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Desktop Menu (visible on large screens) -->
      <ul class="hidden lg:flex space-x-6">
        <li><a href="#" class="font-semibold text-black underline">Dự án</a></li>
        <li><a href="#" class="font-semibold text-gray-400">Về chúng tôi</a></li>
        <li><a href="#" class="font-semibold text-gray-400">Đánh giá</a></li>
      </ul>

      <!-- Mobile Menu (Sliding from right) -->
      <div :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'" class="fixed z-10 top-0 right-0 h-full bg-white shadow-lg menu-transition lg:hidden py-4 px-10" style="width: fit-content;">
            <!-- Close Button -->
            <div class="flex justify-end mb-4">
                <button @click="isMenuOpen = false" class="focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>

            <!-- Menu Items -->
            <ul class="flex flex-col space-y-4">
                <li><a href="#" class="font-semibold text-black underline">Dự án</a></li>
                <li><a href="#" class="font-semibold text-gray-400">Về chúng tôi</a></li>
                <li><a href="#" class="font-semibold text-gray-400">Đánh giá</a></li>
            </ul>
        </div>
    </div>

  </header>

  <main class="">
    <div class="">
      <!-- Banner  -->
      <div>
        <a href="#gridImage"><img class="w-full h-auto" src="/assets/images/banner.png" alt=""></a>
      </div>
      <!-- Grid Image -->
      <div id="gridImage" class=" flex-1  px-[4%] md:px-[10%]">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          <div v-for="thumb in thumbnails"
            class=" group relative overflow-hidden rounded bg-white hover:cursor-pointer ">
            <img class="w-full" :src="`/assets/thumbnails/${thumb.imgSrc}.png`" alt="Project Image" />

            <!-- Overlay that shows on hover -->
            <div @click="setDetail(thumb.imgSrc)"
              class="absolute inset-0 flex flex-row items-end justify-center bg-black bg-opacity-50  transition-opacity duration-300 opacity-100 md:opacity-0  group-hover:opacity-100">
              <div class="flex items-center justify-between w-full p-2 pb-3">
                <div class="text-xs">
                  <div class="font-bold text-white">{{ thumb.title }}
                  </div>
                  <p class="text-gray-100">{{ thumb.subTitle }}</p>
                </div>

                <div class="mt-4 flex items-center space-x-2">
                  <div class="flex items-center space-x-1  fill-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0.5 0.5 16 16"
                      class="Appreciations-icon-Z4i ProjectCoverNeue-icon-zWO">
                      <path fill="none" d="M.5.5h16v16H.5z"></path>
                      <path
                        d="M.5 7.5h3v8h-3zM7.207 15.207c.193.19.425.29.677.293H12c.256 0 .512-.098.707-.293l2.5-2.5c.19-.19.288-.457.293-.707V8.5c0-.553-.445-1-1-1h-5L11 5s.5-.792.5-1.5v-1c0-.553-.447-1-1-1l-1 2-4 4v6l1.707 1.707z">
                      </path>
                    </svg>
                    <span class="text-xs text-gray-300">{{ thumb.like }}</span>
                  </div>
                  <div class="flex items-center space-x-1 fill-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 16 16"
                      class="ProjectCoverNeue-icon-zWO">
                      <path
                        d="M8.5 3.5c-5 0-8 5-8 5s3 5 8 5 8-5 8-5-3-5-8-5zm0 7c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .894 2 2 0 1.104-.896 2-2 2z">
                      </path>
                    </svg>
                    <span class="text-xs text-gray-300"> {{ thumb.view }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Overlay List -->
      <div v-show="isOverlayOpen" @click.self="toggleOverlay"
        class="overlay fixed inset-0 bg-black bg-opacity-85 flex justify-center items-center fadeIn ">
        <div class="bg-white  rounded  h-screen overflow-y-auto w-[80%] md:w-[70%]">
          <ul>
            <li v-for="item in getDetailImage(folderName)" :key="item" class="text-gray-700">
              <img class="w-full " :src="item" alt="Project Image" />
            </li>
          </ul>
        </div>
      </div>
      <!-- <div v-if="isOverlayOpen" class="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
            <div class="bg-white p-5 rounded shadow-lg h-full w-4/5 sm:w-3/5 lg:w-3/5">
                <ul class="space-y-2">
                    <li v-for="i in 29" :key="item" class="text-gray-700">
                      <img class="w-full " :src="`/assets/images/kuzo-29/${i}.png`" alt="Project Image" />
                    </li>
                </ul>
            </div>
        </div> -->

    </div>
  </main>
  <footer id="footer" class="bg-black text-white mt-12 px-8 text-sm">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex items-center ">
        <img class="w-[100px] h-[auto]" src="/assets/images/Avt.png" alt="Adobe Logo">
        <span>&copy; 2024 Brandie Inc. All rights reserved.</span>
      </div>
      <div class="flex space-x-4">
        Copyright © 2024 Brandie Inc.
      </div>
    </div>
  </footer>
</template>

<style>
#menu-toggle {
  display: none;
}

/* Show the mobile menu when the checkbox is checked */
#menu-toggle:checked+#menu-icon+#mobile-menu {
  display: block;
}

/* Hide the mobile menu by default */
#mobile-menu {
  display: none;
}

.fadeIn {
  animation: fadeInAnimation 0.5s forwards;
}

.fadeOut {
  animation: fadeOutAnimation 0.5s forwards;
}

@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }

}

@keyframes fadeOutAnimation {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

#element::-webkit-scrollbar {
  display: none;
}

::-webkit-scrollbar {
  display: none;
}

.menu-transition {
            transition: transform 0.2s ease, opacity 0.2s ease;
}

html{
  scroll-behavior: smooth;
}
</style>