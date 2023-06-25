import './styledContent.scss';

const StyledContent = ({title, children}) => {
  return (
    <div id="styled-content">
      <div className='content'>
        <div className='page-head'>{title}</div>
        {children}
      </div>
    </div>
  )
}

export default StyledContent;