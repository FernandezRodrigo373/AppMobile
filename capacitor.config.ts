
export const CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'PruebaApp',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 0, // Oculta el splash screen nativo lo más rápido posible
      backgroundColor: '#FBD7B9', // Fondo del splash screen
      androidSplashResourceName: 'splash', // Archivo de splash screen nativo
      androidScaleType: 'CENTER_CROP', // Cómo se escala la imagen
      showSpinner: false, // Ocultar el spinner por defecto
    },
  },
};
