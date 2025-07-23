import { useEffect } from 'react';

interface KayakoSettings {
  apiUrl: string;
  messengerUrl: string;
  realtimeUrl: string;
}

interface Kayako {
  readyQueue: Function[];
  newEmbedCode: boolean;
  ready(callback: Function): void;
  _settings: KayakoSettings;
  config: { styles: { primaryColor: string } };
}

declare const window: Window & {
  kayako?: Kayako;
};

export const useKayakaoInit = () => {
  useEffect(() => {
    const scriptId = 'kayako-messenger-script';

    const loadKayako = () => {
      window.kayako = window.kayako || {
        readyQueue: [],
        newEmbedCode: true,
        ready(callback: Function) {
          this.readyQueue.push(callback);
        },
        _settings: {
          apiUrl: 'https://zennolab.kayako.com/api/v1',
          messengerUrl: 'https://zennolab.kayakocdn.com/messenger',
          realtimeUrl: 'wss://kre.kayako.net/socket',
        },
        config: {
          styles: {
            primaryColor: '#7D6EFF',
          },
        },
      };

      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.async = true;
        script.type = 'text/javascript';
        script.src = window.kayako._settings.messengerUrl;
        script.crossOrigin = 'anonymous';
        document.body.appendChild(script);
      }
    };

    if (document.readyState === 'complete') {
      loadKayako();
    } else {
      window.addEventListener('load', loadKayako);
    }

    return () => {
      const script = document.getElementById(scriptId);
      if (script) {
        script.remove();
      }

      window.removeEventListener('load', loadKayako);
    };
  }, []);
};
