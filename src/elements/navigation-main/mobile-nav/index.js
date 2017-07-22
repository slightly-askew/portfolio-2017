//@flow
import React from "react";

type NavItem = {
  +label: string,
  +type: "li" | "ul",
  +target: "string",
  listItems?: NavItem[]
}

type NavStructure = NavItem[] | NavItem;

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
type ElementSet = ReactElement[] | ReactElement;

//fetch element from an Array,
//so that different elements may be used at different nested depths if needed.
//If no element in array at requested depth,
//the deepest element will be selected.
const getElement = (
  elementSet: ElementSet,
  depth: number = 0
): ReactElement => {
  if (Array.isArray(elementSet)) {
    return elementSet[depth] || elementSet.slice.pop();
  } else {
    return elementSet;
  }
};

//return a <li>
const selectLi = (el, item) => <el target={item.target}>{item.label}</el>;

//return a <ul> and recurse the sortNav function on child elements
const selectUl = (uls: ElementSet, lis: ElementSet, item, depth) => {
  const el = getElement(uls, depth)
  const children = item.listItems;
  <el>
    {sortNav(children, uls, lis, depth)}
  </el>
};

//for each level of navigation, create the list elements
const sortNav = (
  navData: NavStructure,
  uls: ElementSet,
  lis: ElementSet,
  depth: number = 0
) => {
  return navData.map(n => {
    if (n.type === "li") {
      return selectLi(getElement(lis, depth), n);
    } else if (n.type === "ul") {
      return selectUl(uls, lis, n, depth++);
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
  const { mainNavigation, ...uiProps } = ui;

  return <div />;
};

export default MobileNav;
