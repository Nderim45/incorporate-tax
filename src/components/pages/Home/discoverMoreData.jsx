import Image1 from '../../../assets/Home/image-from-rawpixel-id-630622-jpeg.png'
import Image2 from '../../../assets/Home/michael-dolejs-FRdEUCB3DEU-unsplash.png'
import Image3 from '../../../assets/Home/christina-wocintechchat-com-eF7HN40WbAQ-unsplash.png'
import Logo1 from '../../../assets/Home/videocamerathree.png'
import Logo2 from '../../../assets/Home/noun_case study_4015005.png'
import Logo3 from '../../../assets/Home/users-solid-alerted.png'
import { FormattedMessage } from 'react-intl'

export const data = [
    {
        image: Image1,
        logo: Logo1,
        title: <FormattedMessage id="DiscoverMore.Card.Title1"/>,
        content: <FormattedMessage id="DiscoverMore.Card.Description1"/>
    },
    {
        image: Image2,
        logo: Logo2,
        title: <FormattedMessage id="DiscoverMore.Card.Title2"/>,
        content: <FormattedMessage id="DiscoverMore.Card.Description2"/>
    },
    {
        image: Image3,
        logo: Logo3,
        title: <FormattedMessage id="DiscoverMore.Card.Title3"/>,
        content: <FormattedMessage id="DiscoverMore.Card.Description3"/>
    },
]