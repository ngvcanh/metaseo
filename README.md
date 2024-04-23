# Meta SEO

## Installation

```
npm i metaseo
```

Or

```
yarn add metaseo
```

## Using

```jsx
import { Metadata } from "metaseo";

export default function App() {
  return (
    <Html>
      <Head>
        <Metadata
          config={{
            ...config
          }}
        />
      </Head>
    </Html>
  );
}
```
