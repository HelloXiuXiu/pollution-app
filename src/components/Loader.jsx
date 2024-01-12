import './Loader.css'

export default function Loader ({ loadStatus }) {
  return (
    <p className="loader">
      { loadStatus }
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </p>
  )
}
