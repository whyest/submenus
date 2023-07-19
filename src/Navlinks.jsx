import { useGlobalContext } from './Context'
import sublinks from './data'

const Navlinks = () => {
  const { setPageId } = useGlobalContext()
  return (
    <div className='nav-links'>
      {sublinks.map((item) => {
        const { page, pageId } = item
        return (
          <button
            key={pageId}
            onMouseEnter={() => setPageId(pageId)}
            className='nav-link'
          >
            {page}
          </button>
        )
      })}
    </div>
  )
}
export default Navlinks
