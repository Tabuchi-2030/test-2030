import { FC } from 'react';
import { Link } from '@remix-run/react';

import { imgPage01 } from '~/lib/img/page01/images';


const Header: FC = () => {
 return (
  <header>
    <div className="gblHeader">
      <div className="gblHeader-inner [--bg:#f5f5f5]">
        <div className="gblHeader-area gblHeader-area--ratio aspect-[100/5]">

          <div className="colBk">

            <div className="rowBk">
              <div className="rowBk-txtBox">
                <div className="rowBk-txt">
                  <p className="ttlText md:[--fs:25] [--fs:20]">サイト名</p>
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
                  <p className="text"><Link to="overview">Overview</Link></p>
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
  </header>
 );
};

export default Header;