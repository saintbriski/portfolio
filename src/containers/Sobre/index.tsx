import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsa
      itaque, nihil, numquam voluptas animi, eius quidem deleniti aperiam
      facilis vero officiis beatae eveniet in delectus modi atque tenetur optio!
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?count_private=true%22&include_all_commits=true&show_icons=true&theme=dracula&username=saintbriski" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=saintbriski&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
