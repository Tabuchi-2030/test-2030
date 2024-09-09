import { FC } from 'react';
import { Link } from '@remix-run/react';


const Footer: FC = () => {
 return (
  <footer>
    <div className="gblFooter">
      <div className="gblFooter-inner [--bg:#f5f5f5]">
        <div className="gblFooter-area gblFooter-area--ratio aspect-[100/15]">

          <div className="colBk">

            <div className="rowBk">
              <div className="rowBk-txtBox">
                <div className="rowBk-txt">
                  <p className="ttlText md:[--fs:25] [--fs:20]">フッターのサイト名</p>
                </div>
              </div>
            </div>{/* /rowBk */}


            <ul className="rowBk rowBk--col">
              <li className="rowBk-listBox">
                <div className="rowBk-list">
                  <p className="text"><Link to="/">Top</Link></p>
                </div>
              </li>
              <li className="rowBk-listBox">
                <div className="rowBk-list">
                  <p className="text"><Link to="about">About</Link></p>
                </div>
              </li>
              <li className="rowBk-listBox">
                <div className="rowBk-list">
                  <p className="text"><Link to="about">Overview</Link></p>
                </div>
              </li>
              <li className="rowBk-listBox">
                <div className="rowBk-list">
                  <p className="text"><Link to="contact">Contact</Link></p>
                </div>
              </li>
            </ul>{/* rowBk */}

          </div>{/* colBk */}

        </div>{/* blkArea */}
      </div>
    </div>
  </footer>
 );
};

export default Footer;