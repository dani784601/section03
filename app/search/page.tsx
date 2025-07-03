export default async function Search(props: Promise<unknown>) {
  // 주소로 전달 되는 쿼리 스트링이나 url 파라미터 값은 page 컴포넌트에 (Promise)Props형태로 전달
  // -> 쿼리 스트링 vs url params는 뭐가 다르지?
  // 암튼 Promise 형태로 오니까, 해당 컴포넌트에 async를 붙여 비동기 처리를 해준다.
  // -> 비동기 처리 안 해주면 에러나나?
  // console.log(props);
  /**
   * 기본 출력 결과(아무 설정 X)
   * prams와 searchParams 외에도 header나 cookie 등 여러 값이 존재함
   * console.log 에는 await를 붙이지 않아도 에러가 나지 않았다.
   * 붙여 보니 props는 function이 아니라는 에러 메세지가 떴다.
   {
    params: Promise {
      <pending>,
      [Symbol(async_id_symbol)]: 36087,
      [Symbol(trigger_async_id_symbol)]: 36086,
      [Symbol(kResourceStore)]: {
        isStaticGeneration: false,
        page: '/search/page',
        fallbackRouteParams: null,
        route: '/search',
        incrementalCache: [IncrementalCache],
        cacheLifeProfiles: [Object],
        isRevalidate: false,
        isPrerendering: undefined,
        fetchCache: undefined,
        isOnDemandRevalidate: false,
        isDraftMode: false,
        requestEndedState: [Object],
        isPrefetchRequest: false,
        buildId: 'development',
        reactLoadableManifest: {},
        assetPrefix: '',
        afterContext: [AfterContext],
        dynamicIOEnabled: false,
        dev: true,
        previouslyRevalidatedTags: [],
        refreshTagsByCacheKind: [Map],
        fetchMetrics: []
      },
      [Symbol(kResourceStore)]: {
        type: 'request',
        phase: 'render',
        implicitTags: [Object],
        url: [Object],
        rootParams: {},
        headers: [Getter],
        cookies: [Getter/Setter],
        mutableCookies: [Getter],
        userspaceMutableCookies: [Getter],
        draftMode: [Getter],
        renderResumeDataCache: null,
        isHmrRefresh: true,
        serverComponentsHmrCache: [LRUCache]
      },
    },
    searchParams: Promise {
      <pending>,
      [Symbol(async_id_symbol)]: 36031,
      [Symbol(trigger_async_id_symbol)]: 36025,
      [Symbol(kResourceStore)]: {
        isStaticGeneration: false,
        page: '/search/page',
        fallbackRouteParams: null,
        route: '/search',
        incrementalCache: [IncrementalCache],
        cacheLifeProfiles: [Object],
        isRevalidate: false,
        isPrerendering: undefined,
        fetchCache: undefined,
        isOnDemandRevalidate: false,
        isDraftMode: false,
        requestEndedState: [Object],
        isPrefetchRequest: false,
        buildId: 'development',
        reactLoadableManifest: {},
        assetPrefix: '',
        afterContext: [AfterContext],
        dynamicIOEnabled: false,
        dev: true,
        previouslyRevalidatedTags: [],
        refreshTagsByCacheKind: [Map],
        fetchMetrics: []
      },
      [Symbol(kResourceStore)]: {
        type: 'request',
        phase: 'render',
        implicitTags: [Object],
        url: [Object],
        rootParams: {},
        headers: [Getter],
        cookies: [Getter/Setter],
        mutableCookies: [Getter],
        userspaceMutableCookies: [Getter],
        draftMode: [Getter],
        renderResumeDataCache: null,
        isHmrRefresh: true,
        serverComponentsHmrCache: [LRUCache]
      },
    }
}
   */
  return <div>Search</div>;
}
