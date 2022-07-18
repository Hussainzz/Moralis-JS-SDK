/* eslint @typescript-eslint/no-explicit-any: off */

import Moralis from 'moralis';
import Server from '@moralisweb3/server';
import EvmApi from '@moralisweb3/evm-api';
import Evm from '@moralisweb3/evm';

export const Core = () => {
  const removeModule = (module: string) => {
    if (module === 'Evm') {
      Moralis.Core.modules.remove('evm');
    }
    if (module === 'Server') {
      Moralis.Core.modules.remove('server');
    }
    const list = Moralis.Core.modules.list();
    if (module === 'EmvApi') {
      Moralis.Core.modules.remove('emvApi');
    }
    console.log('after removing:', typeof list);
  };

  const registerModule = (module: string) => {
    if (module === 'Evm') {
      Moralis.Core.registerModules([Evm]);
    }
    if (module === 'Server') {
      Moralis.Core.registerModules([Server]);
    }
    if (module === 'EvmApi') {
      Moralis.Core.registerModules([EvmApi]);
    }
    const list = Moralis.Core.modules.list();
    console.log('after registering:', list);
  };

  const setConfig = (key: any, value: any) => {
    Moralis.Core.config.set(key, value);
    console.log('value is set');
  };

  const readConfig = (key: any) => {
    const key1 = Moralis.Core.config.get(key);
    console.log('read config:', key1);
  };

  return (
    <div>
      <h2>Core</h2>

      <button onClick={() => removeModule('Evm')}>Remove evm module</button>
      <button onClick={() => removeModule('EvmApi')}>Remove evmApi module</button>
      <button onClick={() => removeModule('Server')}>Remove server module</button>

      <button onClick={() => registerModule('Evm')}>Register evm module</button>
      <button onClick={() => registerModule('EvmApi')}>Register evmApi module</button>
      <button onClick={() => registerModule('Server')}>Register server module</button>
      <button onClick={() => readConfig('serverUrl')}>Read config</button>

      <button onClick={() => setConfig('serverUrl', 'https://cq7vjfglnsje.usemoralis.com:2053/server')}>
        Set config
      </button>
    </div>
  );
};
