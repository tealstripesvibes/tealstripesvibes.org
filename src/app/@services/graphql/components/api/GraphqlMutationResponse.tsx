import {MutationResult} from '@apollo/client';
import React from 'react';
import {NotDev} from '@core/dev/components/Dev';
import {Loading} from '../layout/Loading';
import styled from 'styled-components';

class GraphQlError extends Error {
  constructor(error: MutationResult['error']) {
    super();
    if (!error) return;
    const oneError = error.graphQLErrors.length === 1;
    const firstErr = error.graphQLErrors[0];
    Object.assign(this, {
      error:   true,
      message: oneError ? firstErr.message : undefined,
      kind:    oneError
               ? firstErr.extensions.code === 'INTERNAL_SERVER_ERROR'
                 ? 500
                 : null
               : null,
      orig:    error,
    });
  }
}


const Wrapper = styled.div`
    position: absolute;
    right: 0;
    font-size: 15px;
    width: 100%;
    outline: thick solid green;
    background: wheat;
    overflow: scroll;
    top: 100%;
    z-index: 1;
    max-height: 150px;
`

export function GraphqlMutationResponse({
                                          response,
                                        }: {
  response: MutationResult;
}) {
  const {data, loading, error} = response;

  if (loading) return <Loading/>;
  // if (data) return <pre>{JSON.stringify(data)}</pre>
  if (!error) return null;

  const graphQlError = new GraphQlError(error);
  return (
    <Wrapper>
      <NotDev>
        {() => {
          throw graphQlError;
        }}
      </NotDev>
      <pre>{JSON.stringify(graphQlError ?? data ?? {})}</pre>
    </Wrapper>
  );
}
