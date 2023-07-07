
import { Header, Skills, Experience, Projects, Education } from './sections'

export const ResumeForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {}
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Header />
        <Skills />
        <Experience />
        <Projects />
        <Education />

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-white">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Save
          </button>
        </div>
      </form>
    </>
  )
}