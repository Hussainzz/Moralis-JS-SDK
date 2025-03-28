import MoralisCore from '@moralisweb3/common-core';
import { verifyRemoveBindOperation, VerifyRemoveBindRequest } from './verifyRemoveBindOperation';

describe('evmRequestChallengeOperation', () => {
  let core: MoralisCore;

  beforeAll(() => {
    core = MoralisCore.create();
  });

  it('serializeRequest() serializes correctly and deserializeRequest() deserializes correctly', () => {
    const message =
      'Please sign this message to bind:\nProfile Ids:\n- 0x0b2bbac1251651c0cbbdbbb29fed5a03adc8b05a2a9eb10a02aaa489b9c1f8ff\n\nwith\n\nAddress: 0x6ed338bcB610640e81465FCfb9894DDfA354Cc91\nNonce: 5pXWu7aGkY2J7II0X';
    const signature =
      '0xc4f2f59d80e036ecab4eaaac5d4ee713ab94264ca584839c98b5743c4f6777322038225a4bc1e0f13b8382166816737369f26bd66f0479cfa80d4c52c02eb2cb1b';

    const request: Required<VerifyRemoveBindRequest> = {
      message,
      signature,
    };

    const serializedRequest = verifyRemoveBindOperation.serializeRequest(request, core);

    expect(serializedRequest.message).toBe(request.message);
    expect(serializedRequest.signature).toBe(request.signature);

    const deserializedRequest = verifyRemoveBindOperation.deserializeRequest(serializedRequest, core);

    expect(deserializedRequest.message).toBe(request.message);
    expect(deserializedRequest.signature).toBe(request.signature);
  });
});
