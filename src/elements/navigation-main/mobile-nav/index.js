//@flow
import React from "react";

type LiItem = {
  +label: string,
  +type: "li" | "ul",
  +target: "string",
}

type UlItem <U>= {
  +label: string,
  +type: "li" | "ul",
  +target: "string",
  +listItems: U[]
}

type NavStructure = Array<mixed>;

type Props = {
  ui: {
    breakpoints: {
      device: string
    },
    mainNavigation: NavStructure,
    mobileMenuButtonStatus: string,
    mobileMenuIsOpen: boolean
  }
};
type ReactElement = React$Component<*, *, *>
 | React$Element<*>;
type ElementSet = ReactElement[];

//fetch element from an Array,
//so that different elements may be used at different nested depths if needed.
//If no element in array at requested depth,
//the deepest element will be selected.
const getElement = <E> (
  elementSet: E[],
  depth: number = 0
): E => {
  if (Array.isArray(elementSet)) {
    return elementSet[depth] || elementSet.slice.pop();
  } else {
    return elementSet;
  }
};

//return a <li>
const selectLi = (El, item: LiItem, props) => {
  return <El {...props} target={item.target}>{item.label}</El>
};

//return a <ul> and recurse the sortNav function on child elements
const selectUl = (uls: ElementSet, lis: ElementSet, item: UlItem<*>, depth: number = 0, props) => {
  const El = getElement(uls, depth)
  const children = item.listItems;
  return <El {...props}>
    {sortNav(children, uls, lis, depth)}
  </El>
};

//for each level of navigation, create the list elements
const sortNav = (
  navData: NavStructure,
  uls: ElementSet,
  lis: ElementSet,
  depth: number = 0,
  props
) => {
  return navData.map(n => {
    if (n.type === "li") {
      return selectLi(getElement(lis, depth), n, props);
    } else if (n.type === "ul") {
      return selectUl(uls, lis, n, depth++, props);
    } else {
      return new Error(
        `couldn't determine the navigation node of ${n.type},
        can only process objects with a type of 'li' or 'ul.
        The full node was /n ${JSON.stringify(n)}`
      );
    }
  });
};

const MobileNav = ({ ui, ...props }: Props) => {
  const { mainNavigation, ...NavProps } = ui;

  return <div />;
};

export default MobileNav;
