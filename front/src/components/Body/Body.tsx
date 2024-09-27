import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Body.module.css';
import { SvgIcon } from './SvgIcon';
import { SvgIcon2 } from './SvgIcon2';
import { SvgIcon3 } from './SvgIcon3';
import { SvgIcon4 } from './SvgIcon4';
import { SvgIcon5 } from './SvgIcon5';
import { SvgIcon6 } from './SvgIcon6';
import { SvgIcon7 } from './SvgIcon7';
import { SvgIcon8 } from './SvgIcon8';
import { SvgIcon9 } from './SvgIcon9';
import { SvgIcon10 } from './SvgIcon10';

interface Props {
  className?: string;
}
/* @figmaId 782:3 */
export const Body: FC<Props> = memo(function Body(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.background}>
        <div className={classes.background2}>
          <div className={classes.container}>
            <div className={classes.backgroundVerticalBorder}></div>
            <div className={classes.background3}>
              <div className={classes.input}>
                <div className={classes.container2}></div>
              </div>
              <button className={classes.button}>
                <div className={classes.sVG}>
                  <SvgIcon className={classes.icon} />
                </div>
                <div className={classes.unnamed}>Введите название предмета</div>
              </button>
              <div className={classes.buttonUndoSVG}></div>
              <div className={classes.verticalDivider}></div>
              <button className={classes.button2}>
                <div className={classes.done}>Done</div>
                <div className={classes.sVG2}>
                  <SvgIcon2 className={classes.icon2} />
                </div>
              </button>
              <div className={classes.background4}>
                <div className={classes.image}></div>
                <div className={classes.rectangle}></div>
                <div className={classes.rectangle2}></div>
              </div>
            </div>
          </div>
          <div className={classes.backgroundHorizontalBorder}></div>
          <div className={classes.background5}>
            <div className={classes.button3}>
              <div className={classes.sVG3}>
                <SvgIcon3 className={classes.icon3} />
              </div>
              <div className={classes.split}>Split</div>
            </div>
            <div className={classes.button4}>
              <div className={classes.sVG4}>
                <SvgIcon4 className={classes.icon4} />
              </div>
              <div className={classes.voiceover}>Voiceover</div>
            </div>
            <button className={classes.buttonSkipBack}>
              <div className={classes.sVG5}>
                <SvgIcon5 className={classes.icon5} />
              </div>
            </button>
            <button className={classes.button5}>
              <div className={classes.sVG6}>
                <SvgIcon6 className={classes.icon6} />
              </div>
            </button>
            <button className={classes.buttonSkipForward}>
              <div className={classes.sVG7}>
                <SvgIcon7 className={classes.icon7} />
              </div>
            </button>
            <div className={classes.inputCurrentTime}>
              <div className={classes.container3}>
                <div className={classes._00}>00:00</div>
              </div>
            </div>
            <div className={classes.unnamed2}>/</div>
            <div className={classes.inputProjectDuration}>
              <div className={classes.container4}>
                <div className={classes._10}>01:00</div>
              </div>
            </div>
            <div className={classes.container5}></div>
            <div className={classes.log}></div>
            <div className={classes.buttonZoomOut}>
              <div className={classes.sVG8}>
                <SvgIcon8 className={classes.icon8} />
              </div>
            </div>
            <div className={classes.background6}></div>
            <div className={classes.background7}></div>
            <div className={classes.slider}></div>
            <div className={classes.buttonZoomIn}>
              <div className={classes.sVG9}>
                <SvgIcon9 className={classes.icon9} />
              </div>
            </div>
            <div className={classes.button6}>
              <div className={classes.fit}>Fit</div>
            </div>
            <div className={classes.verticalDivider2}></div>
            <div className={classes.button7}>
              <div className={classes.sVG10}>
                <SvgIcon10 className={classes.icon10} />
              </div>
            </div>
            <div className={classes.container6}></div>
          </div>
        </div>
      </div>
    </div>
  );
});
