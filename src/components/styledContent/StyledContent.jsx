import './styledContent.scss';

const StyledContent = ({title, children}) => {
  return (
    <div id="styled-content">
      <div className='content'>
        <div className='page-head'>
          <h4>{title}</h4>
        </div>
        <div className='page-body'>{children}</div>
      </div>
    </div>
  )
}

export default StyledContent;