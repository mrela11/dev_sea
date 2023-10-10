import photo_1 from './media_files/photo/Rectangle 3.png'
import arrow from './media_files/photo/Arrow 01.png'
import dot_ornament from './media_files/photo/Dot Ornament.png'
import photo_2 from './media_files/photo/Group 427320373.png'
import logo from './media_files/icon/Union (1).png'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='main_container'>
        <div className='header_container'>
          <a href='/' className='logo_header'>
            <img className='logo_h' alt="logo" src={logo} />
          </a>
          <div className='bar_container'>
            <div className='bar_item'><a className='bar_link' href='/'>DISCOVER</a></div>
            <div className='bar_item'><a className='bar_link' href='/'>CREATORS</a></div>
            <div className='bar_item'><a className='bar_link' href='/'>SELL</a></div>
            <div className='bar_item'><a className='bar_link' href='/'>STATS</a></div>
          </div>
          <input className='search_input' type='text' placeholder='Search Art Work / Creator' />
          <button className='button_connect' type='submit'><div className='div_button_connect'>CONNECT WALLET</div></button>
        </div>
        <div className='section_discover'>
          <div className='hero_and_featurs'>
            <div className='hero_text'>
              <div className='line_top'></div>
              <div className='hero_content'>
                <h1>
                  <pre className='hero_h1'>
                    Discover And<br />
                    Create NFTs
                  </pre>
                </h1>
                <h2>
                  <pre className='hero_h2'>
                    Discover, Create and Sell NFTs On Our NFT Marketplace<br />
                    With Over Thousands Of NFTs And Get a $20 bonus.
                  </pre>
                </h2>
              </div>
              <div className='hero_buttons'>
                <button className='hero_botton_1'><div className='hero_botton_1_title'>EXPLORER MORE</div></button>
                <button className='hero_botton_2'><div className='hero_botton_2_title'>CREATE NFT</div></button>
              </div>
            </div>
            <div className='featurs'>
              <div className='list_1'>
                <div className='list_1_num'>430K+</div>
                <div className='list_1_title'>Art works</div>
              </div>
              <div className='list_2'>
                <div className='list_2_num'>159K+</div>
                <div className='list_2_title'>Creators</div>
              </div>
              <div className='list_3'>
                <div className='list_3_num'>87K+</div>
                <div className='list_3_title'>Collections</div>
              </div>
            </div>
          </div>
          <div className='hero_header'>
              <img className='hero_header_img_1' alt='logo' src={photo_1} />
              <img className='hero_header_arrow' alt='logo' src={arrow} />
              <img className='hero_header_dots' alt='logo' src={dot_ornament} />
              <img className='hero_header_img_3' alt='logo' src={photo_2} />
            <div className='nagigator'>
              <button></button>
            </div>
          </div>
        </div>
        <div className='section_weekly'>
          <div className='weekly_title'>Weekly - Top NFT</div>
          <div className='trending_items'>
            <div className='trending_item_container'>
              <div className='trending_item'>
                <div className='trading_item_img_cont'>
                  <img className='trading_item_img' alt='logo' src='#' />
                  <div className='trending_item_time'><div>07h 09m 12s</div></div>
                </div>
                <div className='trading_item_inf_cont'>
                  <div className='trading_item_title'>Sun-Glass</div>
                  <div className='trading_item_inf!_cont'>
                    <div className='current_inf'>
                      <div>Current bid</div>
                      <div className='current_inf!'>
                        <div className='current_inf!_icon'>
                          <img className='current_inf!_icon_logo' alt='logo' src='#' />
                        </div>
                        <div className='current_inf!_num'>
                          <div className='current_inf!_num!'>1/75</div>
                        </div>
                      </div>
                    </div>
                    <button><div>PLACE BID</div></button>
                  </div>
                </div>
              </div>
            </div>
            <div className='trending_item_container'>
              <div className='trending_item'>
                <div className='trading_item_img_cont'>
                  <img className='trading_item_img' alt='logo' src='#' />
                  <div className='trending_item_time'><div>07h 09m 12s</div></div>
                </div>
                <div className='trading_item_inf_cont'>
                  <div className='trading_item_title'>Sun-Glass</div>
                  <div className='trading_item_inf!_cont'>
                    <div className='current_inf'>
                      <div>Current bid</div>
                      <div className='current_inf!'>
                        <div className='current_inf!_icon'>
                          <img className='current_inf!_icon_logo' alt='logo' src='#' />
                        </div>
                        <div className='current_inf!_num'>
                          <div className='current_inf!_num!'>1/75</div>
                        </div>
                      </div>
                    </div>
                    <button><div>PLACE BID</div></button>
                  </div>
                </div>
              </div>
            </div>
            <div className='trending_item_container'>
              <div className='trending_item'>
                <div className='trading_item_img_cont'>
                  <img className='trading_item_img' alt='logo' src='#' />
                  <div className='trending_item_time'><div>07h 09m 12s</div></div>
                </div>
                <div className='trading_item_inf_cont'>
                  <div className='trading_item_title'>Sun-Glass</div>
                  <div className='trading_item_inf!_cont'>
                    <div className='current_inf'>
                      <div>Current bid</div>
                      <div className='current_inf!'>
                        <div className='current_inf!_icon'>
                          <img className='current_inf!_icon_logo' alt='logo' src='#' />
                        </div>
                        <div className='current_inf!_num'>
                          <div className='current_inf!_num!'>1/75</div>
                        </div>
                      </div>
                    </div>
                    <button><div>PLACE BID</div></button>
                  </div>
                </div>
              </div>
            </div>
            <div className='trending_item_container'>
              <div className='trending_item'>
                <div className='trading_item_img_cont'>
                  <img className='trading_item_img' alt='logo' src='#' />
                  <div className='trending_item_time'><div>07h 09m 12s</div></div>
                </div>
                <div className='trading_item_inf_cont'>
                  <div className='trading_item_title'>Sun-Glass</div>
                  <div className='trading_item_inf!_cont'>
                    <div className='current_inf'>
                      <div>Current bid</div>
                      <div className='current_inf!'>
                        <div className='current_inf!_icon'>
                          <img className='current_inf!_icon_logo' alt='logo' src='#' />
                        </div>
                        <div className='current_inf!_num'>
                          <div className='current_inf!_num!'>1/75</div>
                        </div>
                      </div>
                    </div>
                    <button><div>PLACE BID</div></button>
                  </div>
                </div>
              </div>
            </div>
            <div className='trending_item_container'>
              <div className='trending_item'>
                <div className='trading_item_img_cont'>
                  <img className='trading_item_img' alt='logo' src='#' />
                  <div className='trending_item_time'><div>07h 09m 12s</div></div>
                </div>
                <div className='trading_item_inf_cont'>
                  <div className='trading_item_title'>Sun-Glass</div>
                  <div className='trading_item_inf!_cont'>
                    <div className='current_inf'>
                      <div>Current bid</div>
                      <div className='current_inf!'>
                        <div className='current_inf!_icon'>
                          <img className='current_inf!_icon_logo' src='#' />
                        </div>
                        <div className='current_inf!_num'>
                          <div className='current_inf!_num!'>1/75</div>
                        </div>
                      </div>
                    </div>
                    <button><div>PLACE BID</div></button>
                  </div>
                </div>
              </div>
            </div>
            <div className='trending_item_container'>
              <div className='trending_item'>
                <div className='trading_item_img_cont'>
                  <img className='trading_item_img' alt='logo' src='#' />
                  <div className='trending_item_time'><div>07h 09m 12s</div></div>
                </div>
                <div className='trading_item_inf_cont'>
                  <div className='trading_item_title'>Sun-Glass</div>
                  <div className='trading_item_inf!_cont'>
                    <div className='current_inf'>
                      <div>Current bid</div>
                      <div className='current_inf!'>
                        <div className='current_inf!_icon'>
                          <img className='current_inf!_icon_logo' alt='logo' src='#' />
                        </div>
                        <div className='current_inf!_num'>
                          <div className='current_inf!_num!'>1/75</div>
                        </div>
                      </div>
                    </div>
                    <button><div>PLACE BID</div></button>
                  </div>
                </div>
              </div>
            </div>
            <div className='trending_item_container'>
              <div className='trending_item'>
                <div className='trading_item_img_cont'>
                  <img className='trading_item_img' alt='logo' src='#' />
                  <div className='trending_item_time'><div>07h 09m 12s</div></div>
                </div>
                <div className='trading_item_inf_cont'>
                  <div className='trading_item_title'>Sun-Glass</div>
                  <div className='trading_item_inf!_cont'>
                    <div className='current_inf'>
                      <div>Current bid</div>
                      <div className='current_inf!'>
                        <div className='current_inf!_icon'>
                          <img className='current_inf!_icon_logo' alt='logo' src='#' />
                        </div>
                        <div className='current_inf!_num'>
                          <div className='current_inf!_num!'>1/75</div>
                        </div>
                      </div>
                    </div>
                    <button><div>PLACE BID</div></button>
                  </div>
                </div>
              </div>
            </div>
            <div className='trending_item_container'>
              <div className='trending_item'>
                <div className='trading_item_img_cont'>
                  <img className='trading_item_img' alt='logo' src='#' />
                  <div className='trending_item_time'><div>07h 09m 12s</div></div>
                </div>
                <div className='trading_item_inf_cont'>
                  <div className='trading_item_title'>Sun-Glass</div>
                  <div className='trading_item_inf!_cont'>
                    <div className='current_inf'>
                      <div>Current bid</div>
                      <div className='current_inf!'>
                        <div className='current_inf!_icon'>
                          <img className='current_inf!_icon_logo' alt='logo' src='#' />
                        </div>
                        <div className='current_inf!_num'>
                          <div className='current_inf!_num!'>1/75</div>
                        </div>
                      </div>
                    </div>
                    <button><div>PLACE BID</div></button>
                  </div>
                </div>
              </div>
            </div>
            <div className='trending_item_container'>
              <div className='trending_item'>
                <div className='trading_item_img_cont'>
                  <img className='trading_item_img' alt='logo' src='#' />
                  <div className='trending_item_time'><div>07h 09m 12s</div></div>
                </div>
                <div className='trading_item_inf_cont'>
                  <div className='trading_item_title'>Sun-Glass</div>
                  <div className='trading_item_inf!_cont'>
                    <div className='current_inf'>
                      <div>Current bid</div>
                      <div className='current_inf!'>
                        <div className='current_inf!_icon'>
                          <img className='current_inf!_icon_logo' alt='logo' src='#' />
                        </div>
                        <div className='current_inf!_num'>
                          <div className='current_inf!_num!'>1/75</div>
                        </div>
                      </div>
                    </div>
                    <button><div>PLACE BID</div></button>
                  </div>
                </div>
              </div>
            </div>
            <div className='current_nagigator'>
              <button className='current_nagigator_arrow'></button>
            </div>
            <div className='recently_viewd_container'>
              <div className='recently_viewd'>
                <div className='recently_wallet'>
                  <div className='recently_wallet_title'>Recent Viewed</div>
                  <div className='recently_other'>
                    <img className='recently_other_img' alt='logo' src='#' />
                  </div>
                </div>
                <div className='item'></div>
                <div className='item'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
