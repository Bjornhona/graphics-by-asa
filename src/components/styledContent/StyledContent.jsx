import { Link } from 'react-router-dom';
import './styledContent.scss';

const StyledContent = ({title, linksTo, children}) => {
  return (
    <div id="styled-content">
      <div className='content'>
        <div className='page-head'>
          <h4>{title}</h4>
          {linksTo && <div className='links-to'>
            <p>
              {linksTo.prev && <Link to={linksTo.prev.link}>← {linksTo.prev.text}</Link>}
              {linksTo.next && <Link to={linksTo.next.link}>{linksTo.next.text} →</Link>}
            </p>
          </div>}
        </div>
        <div className='page-body'>{children}</div>
      </div>
    </div>
  )
}

export default StyledContent;