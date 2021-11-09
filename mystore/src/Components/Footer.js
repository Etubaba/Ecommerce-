import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
function Footer() {
    return (
        <div className='footer'>
          <p>Copyright@2021</p>  
          <div className='social'>
                <InstagramIcon className='icon'/>
                <TwitterIcon className='icon' />
                <FacebookIcon className='icon' />
          </div>
        </div>
    )
}

export default Footer
