import {ChakraProvider} from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import NavigationBar from '../Components/NavigationBar'

function MyApp({ Component, pageProps }: AppProps) {
	return 	<ChakraProvider>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap" rel="stylesheet"/>
	<NavigationBar/>
	<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
	<script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script><Component {...pageProps} />
</ChakraProvider>
}

export default MyApp
