import figlet, { type Options } from 'figlet';
import { type PluginOption } from 'vite';

export default function (txt: string, figletOptions?: Options): PluginOption {
  return {
    name: 'vite-plugin-figlet',
    apply: 'serve',
    configureServer() {
      figlet(txt, figletOptions, (err, data) => {
        if (err) return;
        console.log(data);
      });
    },
  };
}
