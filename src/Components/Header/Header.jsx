
import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div>
          <div className='text-center my-10'>
            <img className='mx-auto' src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p> {moment().format("dddd, MMMM D YYYY")} </p>
          </div>
        </div>
    );
};

export default Header;