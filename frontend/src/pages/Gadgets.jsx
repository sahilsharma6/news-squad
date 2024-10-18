import React from 'react';
import GadgetsMenu from '../components/GadgetsMenu';

const Gadgets = () => {
  return (
    <div className="td-main-content-wrap td-container-wrap">
      <div className="tdc-content-wrap">
        <div className="tdc_zone">
          <div className="tdc_zone tdi_47 wpb_row td-pb-row">
            <div className="tdc-row">
              <div className="vc_row tdi_49 wpb_row td-pb-row">
                <div className="vc_column tdi_51 wpb_column vc_column_container tdc-column td-pb-span12">
                  <div className="wpb_wrapper">
                    <div className="td_block_wrap tdb_title tdi_52 tdb-category-title td-pb-border-top td_block_template_1">
                      <div className="tdb-block-inner td-fix-index">
                        <h1 className="tdb-title-text">Gadgets</h1>
                        <div></div>
                        <div className="tdb-title-line"></div>
                      </div>
                    </div>

                    <div className="td_block_wrap tdb_category_sibling_categories tdi_53 tdb-category-siblings-in-more td-pb-border-top td_block_template_1 tdb-category-siblings-inline">
                      <div className="tdb-block-inner">
                        <ul className="td-category">
                          <li className="entry-category"><a className="td-current-sub-category" href="#">Gadgets</a></li>
                          <li className="entry-category"><a href="#">Mobile Phones</a></li>
                          <li className="entry-category"><a href="#">Photography</a></li>
                          <li className="entry-category"><a href="#">Reviews</a></li>
                        </ul>
                      </div>
                    </div>

                    <GadgetsMenu />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gadgets;
