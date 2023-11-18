import { Link } from 'react-router-dom';
import './styledContent.scss';

const StyledContent = ({title, linksTo, children}) => {
  return (
    <div id="styled-content">
      <div className='content'>
        <div className='page-head'>
          <h4>{title}</h4>
          {linksTo && <div className='links-to'>
            {linksTo.prev && <Link to={linksTo.prev.link}><p>← {linksTo.prev.text}</p></Link>}
            {linksTo.next && <Link to={linksTo.next.link}><p>{linksTo.next.text} →</p></Link>}
          </div>}
        </div>
        <div className='page-body'>{children}</div>
      </div>
    </div>
  )
}

export default StyledContent;