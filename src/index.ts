import figlet, { type Options } from 'figlet';
import { type PluginOption } from 'vite';

export default function (
  txt: string | string[],
  figletOptions?: Options
): PluginOption {
  return {
    name: 'vite-plugin-figlet',
    apply: 'serve',
    config: () => ({
      clearScreen: false,
    }),
    configureServer() {
      if (Array.isArray(txt)) {
        txt.forEach((t) => {
          figlet(t, figletOptions, (err, data) => {
            if (err) return;
            console.log(data);
          });
        });
      } else {
        figlet(txt, figletOptions, (err, data) => {
          if (err) return;
          console.log(data);
        });
      }
    },
  };
}
