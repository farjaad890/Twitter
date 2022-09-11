import { NavLink } from 'react-router-dom';
import { explore, home, messages, more, notifications, profile, twitter } from './icons';
import './leftplane.scss';


const Leftplane = () =>{
    return(
        <div className='left-plane'>
            <div className='Leftplane-container'>
                <header>
                    {twitter}
                </header>
                <nav>
                    <NavLink to='/'>
                        <span>{home}Home</span>
                    </NavLink>
                    <NavLink to='/explore'>
                        <span>{explore}Explore</span>
                    </NavLink>
                    <NavLink to='/notifications'>
                        <span>{notifications}Notifications</span>
                    </NavLink>
                    <NavLink to='/messages'>
                        <span>{messages}Messages</span>
                    </NavLink>
                    <NavLink to='/profile'>
                        <span>{profile}Profile</span>
                        </NavLink>
                    <button className='more'>
                        <span>{more}More</span>
                    </button>
                </nav>
                <button className='Tweet-button'>
                    Tweet
                </button>
                <footer>
                        <button className='profile-button-left-plane'>
                        <div className='profile-pic-left-panel'>
                        <img alt="Farjaad Waseem" draggable="true" src="https://pbs.twimg.com/profile_images/1514456437229068289/E8D0QNLL_normal.jpg"></img>
                        </div>
                        <div>
                        <div className='left-panel-name'>
                            Muhammad Farjaad Waseem 
                        </div>
                        <br></br>
                        <div className='left-panel-username'>
                            @farjaad890 
                        </div>
                        </div>
                    </button>
                </footer>
            </div>
        </div>
    )
}

export default Leftplane