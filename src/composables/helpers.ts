import { computed, onMounted, onUnmounted, reactive, ref, watch } from "vue";

export const today = new Date();

export const useWindowSize = () => {
    const windowWidth = ref(window.innerWidth);
    const windowHeight = ref(window.innerHeight);
  
    const handleResize = () => {
      windowWidth.value = window.innerWidth;
      windowHeight.value = window.innerHeight;
    };
  
    onMounted(() => {
      window.addEventListener('resize', handleResize);
    });
  
    onUnmounted(() => {
      window.removeEventListener('resize', handleResize);
    });
    watch(() => window.innerWidth, (newWidth: any) => {
        windowWidth.value = newWidth;
    });
    watch(() => window.innerHeight, (newWidth: any) => {
        windowWidth.value = newWidth;
    });
    return {
      windowWidth,
      windowHeight,
    };
  }