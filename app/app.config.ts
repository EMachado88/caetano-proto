export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate'
    },
    header: {
      slots: {
        container: 'px-0 sm:px-0 md:px-0 lg:px-0 xl:px-0 mx-8',
        left: 'lg:flex-auto gap-[60px]'
      }
    }
  }
})
