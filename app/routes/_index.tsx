import { Link } from '@remix-run/react';
import { imgPage01 } from '../lib/img/page01/images';

// import { json } from '@remix-run/node';
// import { useLoaderData } from '@remix-run/react';


// export const loader = async () => {
//   // ローカル開発環境で自己署名証明書を許可
//   process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

//   const res = await fetch('https://react-remix.local/wp-json/wp/v2/pages/24');
//   const pageData = await res.json();
//   return json(pageData);
// };




  const Index = (): JSX.Element => {
  // const pageData = useLoaderData();
 return (
  <main>
    <div className="inner">

        {/* <h1>{pageData.title.rendered}</h1>

        <div dangerouslySetInnerHTML={{ __html: pageData.content.rendered }} /> */}

      <div className="parent">
        <div className="parent-inner">
          <div className="parent-areaR parent-areaR--bcRatio aspect-[100/30]">

            <div className="colBk">

              <div className="rowBk">
                <div className="rowBk-imgBox">
                  <div className="rowBk-img rowBk-img--pd">
                    <img className="image aspect-[@/@]" src={imgPage01.page01Img01} alt="＠" />
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>


      {/* post */}






      <div className="parent">
        <div className="parent-inner">
          <div className="parent-area parent-area--mid parent-area--ratio">

            <div className="colBk">
              <div className="rowBk">

                <div className="rowBk-txtBox rowBk-txtBox--blockPsPe rowBk-txtBox--adjustM">
                  <div className="rowBk-txt [--ps:52] [--ps:52]">
                    <p className="text md:[--fs:12] [--fs:16]">ReactのRemixは、Reactベースのフルスタックフレームワークで、現代のWebアプリケーション開発に特化しています。Remixの主な特徴は、サーバーサイドとクライアントサイドの統合、データのフェッチング、パフォーマンス、およびSEOを考慮した構造です。以下にRemixの主要なポイントを説明します。</p> 
                  </div>
                  <div className="rowBk-txt [--ps:52] [--ps:52]">
                    <p className="text md:[--fs:12] [--fs:16]">Remixは、Reactを使用してクライアントとサーバーの両方でアプリケーションをレンダリングします。ページの初回ロード時にサーバーサイドでHTMLを生成し、ユーザーに素早く表示します。その後、クライアントサイドでインタラクティブなReactコンポーネントが動作するため、ユーザー体験を向上させます。</p> 
                  </div>
                  <div className="rowBk-txt [--ps:52] [--ps:52]">
                    <p className="text md:[--fs:12] [--fs:16]">Remixでは、ファイルベースのルーティングを使用して、簡単にページやコンポーネントのルートを定義できます。ファイル構造に基づいたルーティングが可能で、開発が直感的です。特に、親子関係のルーティングや、動的ルートパラメータの扱いが容易です。</p> 
                  </div>
                  <div className="rowBk-txt [--ps:52] [--ps:52]">
                    <p className="text md:[--fs:12] [--fs:16]">Remixは、データをクライアントサイドでのレンダリングやクエリによる遅延を最小限に抑えるため、サーバーで事前にフェッチしておきます。loader関数を使って、データをフェッチし、コンポーネントに渡すため、スムーズで高速なページ読み込みが実現します。</p> 
                  </div>
                  <div className="rowBk-txt [--ps:52] [--ps:52]">
                    <p className="text md:[--fs:12] [--fs:16]">Remixはパフォーマンスを重視しており、デフォルトでコードのスプリットや、キャッシングを効果的に扱います。ユーザーがページを開く際に、必要なリソースだけを提供し、ページの最適化を図っています。</p> 
                  </div>
                  <div className="rowBk-txt [--ps:52] [--ps:52]">
                    <p className="text md:[--fs:12] [--fs:16]">RemixはSEOを念頭に置いて設計されています。サーバーサイドレンダリングのおかげで、クローラーがページの内容を簡単にインデックスできるため、SEOのパフォーマンスが向上します。また、MetaやLinkコンポーネントを利用して、タイトルやメタタグを動的に管理することができます。</p> 
                  </div>
                  <div className="rowBk-txt [--ps:52] [--ps:52]">
                    <p className="text md:[--fs:12] [--fs:16]">Remixは、エラー処理に独自の仕組みを持っています。Error Boundaryはアプリ内で発生するJavaScriptエラーをキャッチし、ユーザーにエラーメッセージを表示できます。また、Catch Boundaryを使うことで、404エラーやサーバーサイドの問題を処理し、適切なUIを表示できます。</p> 
                  </div>
                  <div className="rowBk-txt [--ps:52] [--ps:52]">
                    <p className="text md:[--fs:12] [--fs:16]">RemixはTypeScriptとの相性が良く、型安全な開発を進めることができます。特に、大規模アプリケーションやチーム開発でのエラーを防ぐため、TypeScriptの導入が容易です。</p> 
                  </div>
                  <div className="rowBk-txt [--ps:52] [--ps:52]">
                    <p className="text md:[--fs:12] [--fs:16]">Remixは、様々なライブラリやAPIと容易に統合できます。Tailwind CSS、PostCSS、Autoprefixerなどのスタイリングツールや、Supabase、Firebaseなどのバックエンドサービスとも簡単に連携可能です。</p> 
                  </div>
                </div>
                
              </div>{/* /rowBk */}
            </div>{/* /colBk */}

          </div>{/* /parent-area */}
        </div>{/* /parent-inner */}
      </div>{/* /parent */}


      <div className="parent">
        <div className="parent-inner">
          <div className="parent-area parent-area--lrg">

            <div className="colBk">       
              <div className="rowBk">
                <div className="rowBk-txtBox rowBk-txtBox--bcRatio">
                  <div className="rowBk-txt rowBk-txt--ratio [--ps:52] [--ps:52]">
                    <h2 className="ttlText md:[--fs:30] [--fs:30] md:[--mt]">contentsName</h2> 
                  </div>
                </div>
              </div>{/* /rowBk */}
            </div>{/* /colBk */}

            <div className="colBk colBk--r3">
              <div className="rowBk">
                <div className="rowBk-imgBox rowBk-imgBox--ratio">
                  <div className="rowBk-img rowBk-img--ratio [--ps:52] [--ps:52]">
                    <img className="image" src={imgPage01.page01Img01} alt="＠" />
                  </div>
                </div>
                <div className="rowBk-txtBox rowBk-txtBox--ratio">
                  <div className="rowBk-txt rowBk-txt--ratio [--ps:52] [--ps:52]">
                    <p className="text md:[--fs:12] [--fs:16] md:[--ta:left] [--ta:left]">Title</p> 
                  </div>
                </div>
              </div>{/* /rowBk */}
              <div className="rowBk">
                <div className="rowBk-imgBox rowBk-imgBox--ratio">
                  <div className="rowBk-img rowBk-img--ratio [--ps:52] [--ps:52]">
                    <img className="image" src={imgPage01.page01Img01} alt="＠" />
                  </div>
                </div>
                <div className="rowBk-txtBox rowBk-txtBox--ratio">
                  <div className="rowBk-txt rowBk-txt--ratio [--ps:52] [--ps:52]">
                    <p className="text md:[--fs:12] [--fs:16] md:[--ta:left] [--ta:left]">Title</p> 
                  </div>
                </div>
              </div>{/* /rowBk */}
              <div className="rowBk">
                <div className="rowBk-imgBox rowBk-imgBox--ratio">
                  <div className="rowBk-img rowBk-img--ratio [--ps:52] [--ps:52]">
                    <img className="image" src={imgPage01.page01Img01} alt="＠" />
                  </div>
                </div>
                <div className="rowBk-txtBox rowBk-txtBox--ratio">
                  <div className="rowBk-txt rowBk-txt--ratio [--ps:52] [--ps:52]">
                    <p className="text md:[--fs:12] [--fs:16] md:[--ta:left] [--ta:left]">Title</p> 
                  </div>
                </div>
              </div>{/* /rowBk */}

            </div>{/* /colBk */}

          </div>{/* /parent-area */}
        </div>{/* /parent-inner */}
      </div>{/* /parent */}


      <div className="parent">
        <div className="parent-inner">
          <div className="parent-area parent-area--lrg">

            <div className="colBk">
              <div className="rowBk">
                <div className="rowBk-imgBox rowBk-imgBox--ratio">
                  <div className="rowBk-img rowBk-img--ratio [--ps:52] [--ps:52]">
                    <img className="image" src={imgPage01.page01Img01} alt="＠" />
                  </div>
                </div>
              </div>{/* /rowBk */}
              <div className="rowBk">
                <div className="rowBk-imgBox rowBk-imgBox--ratio">
                  <div className="rowBk-img rowBk-img--ratio [--ps:52] [--ps:52]">
                    <img className="image image--circle" src={imgPage01.page01Img01} alt="＠" />
                  </div>
                </div>    
              </div>{/* /rowBk */}
            </div>{/* /colBk */}

          </div>{/* /parent-area */}
        </div>{/* /parent-inner */}
      </div>{/* /parent */}



    </div>{/* /inner */}
  </main>
 );
};

export default Index;