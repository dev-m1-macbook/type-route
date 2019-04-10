import {
  RouteDefinitionBuilder,
  ParameterDefinitionCollection,
  PathFn
} from "./types";
import { validate } from "./validate";

export function defineRoute<T extends ParameterDefinitionCollection>(
  params: T,
  path: PathFn<T>
): RouteDefinitionBuilder<T>;
export function defineRoute(path: string): RouteDefinitionBuilder<{}>;
export function defineRoute(...args: any[]) {
  validate["defineRoute"](Array.from(arguments));

  let params: ParameterDefinitionCollection;
  let path: PathFn<{}>;

  if (args.length === 1) {
    params = {};
    path = () => args[0];
  } else {
    params = args[0];
    path = args[1];
  }

  return internalDefineRoute({
    params,
    path,
    p
  });

  const routeDefinitionData: RouteDefinitionBuilder<{}> = {
    params,
    path,
    extend: (...args: any[]) => {
      return {} as any;
    }
  };

  return routeDefinitionData;
}

function internalDefineRoute<T extends ParameterDefinitionCollection>({
  params,
  path,
  parent
}: {
  params: T;
  path: PathFn<T>;
  parent: {
    params: T;
    path: PathFn<T>;
  };
}): RouteDefinitionBuilder<T> {
  const routeDefinitionBuilder: RouteDefinitionBuilder<{}> = {
    params,
    path,
    extend: (...args: any[]) => {
      return {} as any;
    }
  };

  return routeDefinitionBuilder;
}
