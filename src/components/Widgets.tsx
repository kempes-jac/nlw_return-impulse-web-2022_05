/**
 * A biblioteca tailwind permite a compilação e adição de propriedades CSS.
 * 
 * A compilação ocorre pela substituição dos namespaces tailwind por classe já 
 * existentes ou criadas.
 * 
 * A adição de propriedades permite a injeção de animações, uso de cores 
 * personalizadas via constantes,
 * usar tamanhos personalizados via constantes, etc.
 * 
 * A biblioteca de ser adicionada de acordo com a indicação do site 
 * (https://tailwindcss.com/docs/installation/using-postcss).
 * 
 * A compilação propriamente dita é feita pela biblioteca postcss.
 * 
 * Também é possível usar bibliotecas de ícones como a phosphor 
 * (https://phosphoricons.com/).
 * 
 * 
 * O React tem o conceito de Estado, que são variáveis que, ao serem 
 * modificadas, causam o rerender do component, para refletir o novo valor 
 * do Estado.
 * 
 * Existem bibliotecas (como a Headless UI) que adicionam funcionalidades de 
 * acessibilidade automaticamente (nesse projeto foi usado para adição de 
 * acessibilidade ao painel de diálogo do Feedback)
 */

import { ChatTeardropDots} from 'phosphor-react'
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm'

export function Widget(){


  return (
    <Popover className="absolute bottom-4 right-4 flex flex-col items-end md:bottom-8 md:right-8">
      <Popover.Panel><WidgetForm /></Popover.Panel>
      <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
        <ChatTeardropDots className="w-6 h-6"/>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2">
            Feedback
          </span>
        </span>
      </Popover.Button>
    </Popover>
  )
}