import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="principal">
      Lorem, iParagrafosum dolor sit amet consectetur adipisicing elit. Ex
      veniam magnam vitae natus? Placeat, perferendis. Cupiditate ipsa deleniti,
      quas nemo veritatis pariatur voluptatibus a magnam autem. Quod neque enim
      deserunt!
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=HenriqueSabatini&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=HenriqueSabatini&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
