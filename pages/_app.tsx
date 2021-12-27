import {ChakraProvider} from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import NavigationBar from '../Components/NavigationBar'

function MyApp({ Component, pageProps }: AppProps) {
	return 	<ChakraProvider>
	<NavigationBar/>
	<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
	<script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script><Component {...pageProps} />
</ChakraProvider>
}

export default MyApp
